db.getCollection('restaurants').find({"borough" : "Bronx"}).skip(5).limit(5)
