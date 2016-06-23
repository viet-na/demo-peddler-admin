
/** AccessToken indexes **/
db.getCollection("AccessToken").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Product indexes **/
db.getCollection("Product").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** User indexes **/
db.getCollection("User").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** AccessToken records **/
db.getCollection("AccessToken").insert({
  "_id": "FA9JUJUBjnWspAMRBa5q3t3EBmn16dCzrfTQzwRg5Si6MZBvtogmqTIX39B1EHxr",
  "ttl": NumberInt(1209600),
  "created": ISODate("2016-06-14T03:26:54.655Z"),
  "userId": ObjectId("575f7910530962b40bbb8162")
});
db.getCollection("AccessToken").insert({
  "_id": "bc8eDeTki3n5fozRp46c9KkHS8CkyNDIsspE18vSqy1neAcLjltFuYAbW7UAgP0w",
  "ttl": NumberInt(1209600),
  "created": ISODate("2016-06-14T08:41:55.663Z"),
  "userId": ObjectId("575f7910530962b40bbb8162")
});
db.getCollection("AccessToken").insert({
  "_id": "zq6hkDA3ybwywYjBQH6LdRyasIsqD1ewwMrEfohgab0bDoQDZMY1GFhq6QapJvBr",
  "ttl": NumberInt(1209600),
  "created": ISODate("2016-06-15T04:30:46.644Z"),
  "userId": ObjectId("575f7910530962b40bbb8162")
});
db.getCollection("AccessToken").insert({
  "_id": "TVnXRM8eAHCzTB9NvhdiofS02Wx0N80rot3ZJ2m8NoOHi9FuX6eTG7TlFVXVG9xJ",
  "ttl": NumberInt(1209600),
  "created": ISODate("2016-06-22T07:44:59.292Z"),
  "userId": ObjectId("575f7910530962b40bbb8162")
});

/** Product records **/
db.getCollection("Product").insert({
  "_id": ObjectId("575f7b5a530962b40bbb8163"),
  "name": "iPhone 6s",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(499),
  "created": ISODate("2016-06-14T00:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760d385cbabfaab038f1e8c"),
  "name": "iPhone 6",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(399),
  "created": ISODate("2016-06-15T00:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760d654cbabfaab038f1e8d"),
  "name": "iPhone 5s",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(299),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760de22cbabfaab038f1e8e"),
  "name": "iPad Pro",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(599),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760de59cbabfaab038f1e8f"),
  "name": "iPad mini",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(299),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760def1cbabfaab038f1e90"),
  "name": "iMac",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(2000),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760df65cbabfaab038f1e91"),
  "name": "MacBook Pro",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1200),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760dfa8cbabfaab038f1e92"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1300),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760dfc1cbabfaab038f1e93"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1500),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e004cbabfaab038f1e94"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1500),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e012cbabfaab038f1e95"),
  "name": "MacBook Pro",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1200),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e2e8cbabfaab038f1e96"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1500),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e2eecbabfaab038f1e97"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(599),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e2f6cbabfaab038f1e98"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(599),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e317cbabfaab038f1e99"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1500),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e321cbabfaab038f1e9a"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1500),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e334cbabfaab038f1e9b"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(1500),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e37dcbabfaab038f1e9c"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(599),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});
db.getCollection("Product").insert({
  "_id": ObjectId("5760e383cbabfaab038f1e9d"),
  "name": "MacBook Pro Rentina",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(2000),
  "created": ISODate("2016-05-14T17:00:00.0Z")
});

/** User records **/
db.getCollection("User").insert({
  "_id": ObjectId("575f7910530962b40bbb8162"),
  "username": "vietna",
  "password": "$2a$10$NkynY2IvCbfKZQpDCbK5ZeC6Pt8B7onBsk.9H4pi0KT3YrduZV38a",
  "email": "mr.nav90@gmail.com",
  "created": ISODate("2016-06-14T00:00:00.0Z"),
  "displayname": "Ngo Anh Viet",
  "avatar": "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/13344748_1730264523858606_3240140766714948266_n.jpg?oh=bc9383baf0b1369099ed699bc3eb4595&oe=580AEB11"
});
