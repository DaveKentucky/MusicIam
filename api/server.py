from flask import Flask, request
import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from bs4 import BeautifulSoup
from utils import get_random_id, search_genius
import re
import json

# Import code:
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
options = Options()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
options.add_argument('--headless')
options.page_load_strategy = 'eager'
driver = webdriver.Chrome(executable_path=r"C:\\Program Files\\selenium\\chromedriver.exe", options=options)

app = Flask('server')

genius_rapidapi_url = 'https://genius.p.rapidapi.com'

@app.route('/search')
def get_search_genius():
    try:
        search_param = request.args.get('search')
        if search_param == None:
            raise Exception('Invalid search parameters')
        else:
            search_query = {'q': search_param}
    except Exception:
        print('An error occured')

    response = search_genius(search_query, 2)
    return json.dumps(response)

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
        lyrics_soup = html.find_all('div', class_=re.compile('Lyrics__Container-sc'))

        # BeautifulSoup find_all() returns an empty list if no results were found
        if len(lyrics_soup) > 0:
            lyrics = ""
            for soup in lyrics_soup:
                lyrics += soup.get_text("\n", strip=True)
            break

    return lyrics

@app.route('/hot')
def get_hot_tracks():
    page_url = 'https://genius.com'
    search_queries = []
    while True:
        driver.get(page_url)
        page = driver.page_source
        # page = requests.get(page_url)
        html = BeautifulSoup(page, 'lxml')
        # remove script tags that they put in the middle of the lyrics
        [h.extract() for h in html('script')]
        # get content of all the charts title divs
        titles_soup = html.findAll('div', class_=re.compile('ChartSongdesktop__Title-sc'))
        print(html)
        if len(titles_soup) > 0:
            for title_soup in titles_soup:
                # extract the title string
                title = title_soup.get_text()
                while True:
                    # get the parent div with title and lyrics, which is sibling to the artist div
                    parent_soup = title_soup.find_parent('div')
                    # get the content of artist header
                    artist_soup = parent_soup.find_next_sibling('h4', class_=re.compile('ChartSongdesktop__Artist-sc'))
                    if artist_soup is not None:
                        # extract the artist name string
                        artist = artist_soup.get_text()
                        break
                    # build the search query for Genius API
                search_queries.append(title + ' ' + artist)
            break

    songs = []
    for query in search_queries:
        search_query = {'q': query}
        songs.append(search_genius(search_query, 1)[0])
    return json.dumps(songs)
    

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
