from pymongo import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://bswarnali78:Swarnali0325@jar.8psnl.mongodb.net/?retryWrites=true&w=majority&appName=JAR"

client = MongoClient(uri, server_api=ServerApi('1'))

db = client.get_database('Tasks')