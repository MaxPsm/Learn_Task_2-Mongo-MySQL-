db.getCollection('restaurants').find(
                           {
                             "cuisine" : {$ne : "American "},
                             "grades.score" :{$gt: 70},
                             "address.coord.1" : {$gt : 35.754168}
                            }
                     )
