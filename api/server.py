import time
from flask import Flask

app = Flask(__name__)

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