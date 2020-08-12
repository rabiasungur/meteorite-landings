 bla = [datetime(landing.year) for landing in landings]

 db.collection.aggregate([
    { "$addFields": {
        "date": { 
            "$dateFromString": { 
                "dateString": "$created_at",
                "format": "%m-%d-%Y" /* <-- option available only in version 4.0. and newer */
            } 
        }
    } }
])

db.ClockTime.find().forEach(function(doc) { 
    doc.ClockInTime=new Date(doc.ClockInTime);
    db.ClockTime.save(doc); 
    })