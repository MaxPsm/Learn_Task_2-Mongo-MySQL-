db.getCollection('restaurants').find(
        {
            "cuisine": {$ne : "American "},
            "grades.grade": "A",
            "borough" : {$ne: "Brooklyn"}
        }
    ).sort({cuisine : -1})
