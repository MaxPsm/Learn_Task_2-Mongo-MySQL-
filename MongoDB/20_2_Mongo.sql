db.getCollection('restaurants').find({"address.street": ""}).count()
