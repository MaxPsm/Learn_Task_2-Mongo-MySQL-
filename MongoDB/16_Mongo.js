db.getCollection('restaurants').find(
        {$or: [
            {name: /^Wil/}, 
            {cuisine: {$nin: ["American ", "Chinese"]}}
        ]}
        ,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})
