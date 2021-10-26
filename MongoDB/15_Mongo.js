db.getCollection('restaurants').find({"grades.score" : { $not: {$gt : 10}}})
