from flask import Blueprint, request, jsonify
from models.users import User
from pymongo.mongo_client import MongoClient
from pymongo.client_options import ServerApi

uri = "mongodb+srv://bswarnali78:<Swarnali0325>@jar.8psnl.mongodb.net/?retryWrites=true&w=majority&appName=JAR"

client = MongoClient(uri, server_api=ServerApi('1'))
db = client.