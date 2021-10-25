db.getCollection('restaurants').find({borough: "Bronx", cuisine: {$in: ["American ","Chinese"]}})
