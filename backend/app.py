from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

# allows cross-functional communication with REACT by allowing frontend to make requests
CORS(app) 

@app.route('/')
def home():
    return "<p> Hi </p>"

if __name__ == "__main__":
    app.run(debug=True)