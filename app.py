from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import Flask, jsonify
import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/meteorite_db.landings"
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/landing_data")
def landing_data():

    landings = mongo.db.landings.find_one()
    return JSONEncoder().encode(landings)
    

if __name__ == "__main__":
    app.run(debug=True)

