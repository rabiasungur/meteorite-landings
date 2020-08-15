from flask import Flask, render_template, redirect, Blueprint
from flask_pymongo import PyMongo
from flask import Flask, jsonify
import json
from datetime import datetime

# from bson import ObjectId

# class JSONEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, ObjectId):
#             return str(o)
#         return json.JSONEncoder.default(self, o)


app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/meteorite_db.landings"
mongo = PyMongo(app)

@app.after_request # blueprint can also be app~~
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

@app.route("/")
def index():
    return render_template("index.html")

# @app.route("/")
# def index():
#     return render_template("map2.html")

# @app.route("/")
# def index():
#     return render_template("scatter.html")

@app.route("/api/landing_data")
def landing_data():
    start_date = datetime(2010,1,1)
    end_date = datetime(2020,1,1)
    landings = mongo.db.landings.find({'year':{'$lt':end_date, '$gt':start_date}}, {'_id':False})
    
    # landings = mongo.db.landings.find_one({}, {'_id':False})
    # return JSONEncoder().encode(landings)
    bla = [landing for landing in landings]
    ble = {
        "data": bla
    }
    return jsonify(ble)

if __name__ == "__main__":
    app.run(debug=True)

