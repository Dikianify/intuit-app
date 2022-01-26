from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.ext.automap import automap_base
import inspect

app = Flask(__name__, instance_relative_config=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bookingdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)
open_appointments = Base.classes.open_appointments
booked_appointments = Base.classes.booked_appointments


class Client(db.Model):
  __tablename__ = 'booked_appointments'
  email = db.Column(db.Text, primary_key=True)
  date = db.Column(db.Text, unique=True, nullable=False)
  time = db.Column(db.Text, unique=True, nullable=False)
  column = db.Column(db.Text, unique=True, nullable=False)


@app.route("/get_times", methods=(["POST"]))
def get_times():
  date=request.get_json()[:10]
  
  raw_date_data = db.session.query(open_appointments).filter_by(date=date).all()[0]

  date_data = []
  for i, data in enumerate(inspect.getmembers(raw_date_data)):
    if not data[0].startswith('_') and not inspect.ismethod(data[1]) and i > 38 and data[1] != "":
      date_data.append(
        {"value":data[0],
        "label":data[1]
        })

  response = make_response(jsonify({ "options" : date_data }))
  response.headers["Content-Type"] = "application/json"

  return response


@app.route("/post_appointment", methods=["POST"])
def post_appointment():
  data=request.get_json()
  email=data[0]
  date=data[1][:10]
  time=data[2]["label"]
  time_column=data[2]["value"]

  db.session.query(open_appointments).filter_by(date=date).update({time_column:""})

  old_booking = db.session.query(booked_appointments).filter_by(email=email).first()
  if old_booking != None:
    db.session.delete(old_booking)
    db.session.query(open_appointments).filter_by(date=old_booking.date).update({old_booking.column:old_booking.time})

  client=Client(email=email, date=date, time=time, column=time_column)
  db.session.add(client)
  db.session.commit()

  return jsonify('ok'), 201

@app.route('/delete_booking', methods=['POST'])
def delete_booking():
  data=request.get_json()
  email=data[0]

  old_booking = db.session.query(booked_appointments).filter_by(email=email).first()
  db.session.delete(old_booking)
  db.session.query(open_appointments).filter_by(date=old_booking.date).update({old_booking.column:old_booking.time})
  db.session.commit()