username
    String
    Unique
    Required
    trimmed

email
    String
    Unique
    Required
// Must match a valid email address (look into Mongoose's matching validation)

thoughts
//[] of _id val referencing thought model
friends
//[] of _id val referencing thought model


//Schema Settings

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

