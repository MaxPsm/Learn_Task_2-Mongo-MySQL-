db.getCollection('restaurants').find( 
                {grades : {$elemMatch: {date: ISODate("2014-08-11T00:00:00Z"), grade:"A", score:10}}}, {restaurant_id:1, name:1, grades:1}
             )
