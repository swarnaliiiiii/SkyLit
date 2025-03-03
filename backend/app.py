from flask import Flask
from blueprints.tasks import tasks_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

app.register_blueprint(tasks_bp)

if __name__ == '__main__':
    app.run(debug=True)