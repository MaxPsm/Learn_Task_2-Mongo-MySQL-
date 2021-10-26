db.getCollection('restaurants').find(
                   { name : 
                     { $regex : "^Mad", $options: "i", } 
                   },
                       {
                         "name":1,
                         "borough":1,
                         "address.coord":1,
                         "cuisine" :1
                        }
                   )
