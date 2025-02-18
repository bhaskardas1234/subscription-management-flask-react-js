from decimal import Decimal

from flask import Flask,request,jsonify, make_response
from flask_cors import CORS,cross_origin
from datetime import datetime, timedelta
# from message91 import generate_otp
from flask_sqlalchemy import SQLAlchemy
from flask import Flask,json,Request,jsonify,request
from flask_cors import CORS
import random
import requests
import pytz
from sqlalchemy.sql import func
from dotenv import load_dotenv
import os
import uuid
from sqlalchemy import update
import time
import hashlib
from sqlalchemy import or_, and_,desc
from sqlalchemy.dialects.postgresql import JSONB

print(int(time.time()))

load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=['*'])
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Shreya@52.3.32.61:5432/MBI'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:mbidev2024@54.235.10.201:5432/postgres'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5432/MBI_WEB'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = True
app.config['CORS_HEADERS'] = 'Content-Type'
# config for file upload


app.config['UPLOAD_FOLDER'] = "uploads"
db = SQLAlchemy()


db.init_app(app)
with app.app_context():
    db.create_all()