from flask import Flask, request
import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from bs4 import BeautifulSoup

app = Flask('server')

genius_rapidapi_url = 'https://genius.p.rapidapi.com'

def get_key_value_pair_from_dict(dictionary, key):
    key = [k for k in dictionary.items() if k[0] == key]
    if key:
        return key[0]
    else:
        return None

@app.route('/authors')
def get_authors():
    return {
        "authors": [
            {
                'id': 1,
                'name': 'Dawid Marczewski'
            },
            {
                'id': 2,
                'name': 'Miłosz Łukaszek'
            }
        ]
    }

@app.route('/search')
def get_search_genius():
    url = genius_rapidapi_url + '/search'
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }

    try:
        search_param = request.args.get('search')
        if search_param == None:
            raise Exception('Invalid search parameters')
        else:
            search_query = {'q': search_param}
    except Exception:
        print('An error occured')

    response = requests.request("GET", url, headers=headers, params=search_query)

    return response.json()

@app.route('/songs/<song_id>')
def get_song(song_id):
    url = genius_rapidapi_url + '/songs/' + str(song_id)
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }

    response = requests.request("GET", url, headers=headers)

    return response.json()

@app.route('/artists/<artist_id>')
def get_artist(artist_id):
    url = genius_rapidapi_url + '/artists/' + str(artist_id)
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }

    response = requests.request("GET", url, headers=headers)

    return response.json()

@app.route('/artists/<artist_id>/songs')
def get_artist_songs(artist_id):
    url = genius_rapidapi_url + '/artists/' + str(artist_id) + '/songs'
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }
    
    response = requests.request("GET", url, headers=headers)

    return response.json()

@app.route('/songs/<song_id>/lyrics')
def get_song_lyrics(song_id):
    res = get_song(song_id)
    path = res['response']['song']['path']
    page_url = 'https://genius.com' + path

    # repeat in case no valid response was received from Genius
    while True:
        page = requests.get(page_url)
        html = BeautifulSoup(page.text, 'lxml')
        # remove script tags that they put in the middle of the lyrics
        [h.extract() for h in html('script')]
        # get content of the 'lyrics' div
        lyrics_soup = html.find('div', class_='lyrics')
        # BeautifulSoup find() returns None if no results were found
        if lyrics_soup is not None:
            lyrics = lyrics_soup.get_text()
            break

    return lyrics

@app.route('/track/')
def get_spotify_track():
    try:
        artist_name = request.args.get('artist')
        track_title = request.args.get('title')
        if not artist_name or not track_title:
            raise Exception('Invalid search parameters')
        else:
            search_string = f'track:{track_title}+artist:{artist_name}'
            search_query = {'q': search_string}
    except Exception:
        print('An error occured')

    sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=os.environ.get('SPOTIFY_CLIENT_ID'),
                                                           client_secret=os.environ.get('SPOTIFY_SECRET_KEY')))

    results = sp.search(q=search_string, limit=5, type='track')
    try:
        url = results['tracks']['href']
        if not url:
            raise Exception('could not get proper response from API')
        headers = {
            'client_id': os.environ.get('SPOTIFY_CLIENT_ID'),
            'client_secret': os.environ.get('SPOTIFY_SECRET_KEY')
        }
    except Exception:
        print('An error occured')

    response = requests.request("GET", url, headers=headers)

    # items = results['items']
    # if len(items) > 0:
    #     artist = items[0]
    #     print(artist['name'], artist['images'][0]['url'])
    
    return response.text
