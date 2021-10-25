db.getCollection('restaurants').find({"address.coord.0" : {$lt : -95.754168}})
