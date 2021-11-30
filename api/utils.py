from random import seed
from random import randint
import requests
import os

genius_rapidapi_url = 'https://genius.p.rapidapi.com'

# seed random number generator
seed(1)

def get_random_id():
	value = randint(0, 7500000)
	return value

def get_key_value_pair_from_dict(dictionary, key):
    key = [k for k in dictionary.items() if k[0] == key]
    if key:
        return key[0]
    else:
        return None

def search_genius(search_query, hits_count=10):
    url = genius_rapidapi_url + '/search'
    headers = {
        'x-rapidapi-host': os.environ.get('GENIUS_API_HOST'),
        'x-rapidapi-key': os.environ.get('GENIUS_API_KEY')
    }
    res = requests.request("GET", url, headers=headers, params=search_query)
    json = res.json()['response']['hits'][0:hits_count]
    return json
