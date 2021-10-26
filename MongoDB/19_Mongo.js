db.getCollection('restaurants').find().sort(
                           {"cuisine":1,"borough" : -1,}
                          )
