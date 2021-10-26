db.getCollection('restaurants').find({grades : { $elemMatch:{"score":{$gt : 80, $lt: 100}}}})
