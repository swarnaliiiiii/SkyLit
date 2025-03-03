from flask import Flask,Blueprint, request, jsonify
from models.users import User
from pymongo.mongo_client import MongoClient
from pymongo.client_options import ServerApi
from database import mongo
from models.users import tasks
from blueprints.tasks import tasks_bp

app = Flask(__name__)

uri = "mongodb+srv://bswarnali78:<Swarnali0325>@jar.8psnl.mongodb.net/?retryWrites=true&w=majority&appName=JAR"

app.config['MONGO_URI'] = uri

client = MongoClient(uri, server_api=ServerApi('1'))

db = client['TASK']

collection = db['skylit']

app.register_blueprint(tasks_bp)


if __name__ == '__main__':
    app.run(debug=True)