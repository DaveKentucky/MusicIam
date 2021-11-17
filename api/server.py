from flask import Flask, request
import requests
import os
from os import environ


app = Flask(__name__)

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

    return response.text

@app.route('/songs/<song_id>')
def get_song(song_id):
    url = genius_rapidapi_url + '/songs/' + str(song_id)
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }

    response = requests.request("GET", url, headers=headers)

    return response.text

@app.route('/artists/<artist_id>')
def get_artist(artist_id):
    url = genius_rapidapi_url + '/artists/' + str(artist_id)
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }

    response = requests.request("GET", url, headers=headers)

    return response.text

@app.route('/artists/<artist_id>/songs')
def get_artist_songs(artist_id):
    url = genius_rapidapi_url + '/artists/' + str(artist_id) + '/songs'
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }
    
    response = requests.request("GET", url, headers=headers)

    return response.text
