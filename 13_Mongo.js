db.getCollection('restaurants').find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, 
                                     {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
