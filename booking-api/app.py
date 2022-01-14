from flask import Flask, current_app, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import g
import sqlite3

app = Flask(__name__)

app = Flask(__name__, instance_relative_config=True)
db = SQLAlchemy()

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bookingdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

def get_db():
  if "db" not in g:
    g.db = sqlite3.connect(
      current_app.config["DATABASE"], detect_types=sqlite3.PARSE_DECLTYPES
    )
    g.db.row_factory = sqlite3.Row

  return g.db


@app.route("/get_times", methods=(["POST"]))
def get_times():
  date=request.get_json()[:10]

  times = (
    get_db()
    .execute(
      'SELECT time_1, time_2, time_3, time_4, time_5, time_6'
      'FROM open_appointments'
      'WHERE date=?', (date,)
    ).fetchone()
  )

  options = [{f"time_{i}":time} for time, i in enumerate(times) if time != ""]

  response = make_response(jsonify({ "options" : options }))
  response.headers["Content-Type"] = "application/json"

  return response