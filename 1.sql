db.getCollection('restaurants').find({}, {restaurant_id:1, name:1, borough:1, cuisine:1})
