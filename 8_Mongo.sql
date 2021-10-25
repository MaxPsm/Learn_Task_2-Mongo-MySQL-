db.getCollection('restaurants').find(
                            {
                             "cuisine" : {$ne : "American "},
                             "grades.score" :{$gt: 70},
                             "address.coord.0" : {$lt : -65.754168}
                            }
                        )
