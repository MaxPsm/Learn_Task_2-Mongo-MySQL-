db.getCollection('restaurants').find({"grades.score" : {"$gt" : 90}})
