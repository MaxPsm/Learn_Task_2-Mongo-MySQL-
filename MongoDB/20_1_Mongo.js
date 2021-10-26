db.getCollection('restaurants').find(
                     {"address.street" : 
                         { $exists : false } 
                     } 
                   ).count()
