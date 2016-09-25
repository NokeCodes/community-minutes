from flask import Flask, g, json
from elasticsearch import Elasticsearch

app = Flask(__name__)

@app.before_request
def before_request():
    g.es = Elasticsearch(['http://192.168.1.71:9200'])

@app.route("/")
def hello():
    return "Yes hello this is dog"

#
# "movement" : {
#   "meeting": {
#           "place": "City hall",
#           "doc": 0,
#           "date": "2016-09-24",
#           "organization": {
#               "name": "City Council"
#               }
#           },
#   "description": 0,
#   "title": "Free cookies for everyone",
#   "votes": [
#      {
#        "yay": true,
#         "person": 1
#      }, {
#        "yay": true,
#        "person": 2
#      }, {
#        "yay": true,
#        "person": 3
#      }, {
#        "yay": true,
#        "person": 4
#      }
#   ],
#   "document": 0
# }
#
@app.route("/api/movements")
def movement():
    q = {'query': {'match_all': {}}}
    res = g.es.search(index='meeting_minutes', body=q)
    data = res['hits']['hits']
    movements = []
    for meeting in data:
        meeting = meeting['_source']
        meeting_json = {
            'place': 'nowhere',
            'date': meeting['meeting_date'],
            'organization': {
                'name': meeting['organization']
            }
        }
        for m in meeting['votes']:
            mv = {
                'meeting': meeting_json,
                'title': m['Motion'],
                'votes': [{
                    'yay': True,
                    'person': x
                } for x in m['AYES']] + [{
                    'yay': False,
                    'person': x
                } for x in m['NAYS']]
            }
            movements.append(mv)
    return json.jsonify(movements)
