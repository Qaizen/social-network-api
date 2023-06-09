//import the schema constructor and model function
const { Schema, model } = require('mongoose');


//object defines the schema for the User document. It has three fields: username, email, thoughts, and friends.
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,     //requiring data to exist for this field
        trim: true
    }, 
    email: {
        type: String,
        unique: true,
        required: true,     //requiring data to exist for this field
        match: [/.+\@.+\..+/, 'Please provide a valid email']
    },
     //The thoughts field is an array of ObjectId values that reference documents in the Thought collection in the MongoDB database. The ref property is set to 'Thought' to indicate that the thoughts array contains ObjectId values that reference Thought documents.
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ], 
    //friends: array of _id values ref User model (self ref)
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    //tell the schema that we can use virtuals
    toJSON: {
        virtuals: true,
    },
    id: false       //set to false b/c virtual mongoose usually returns an id
}
);

//count the length of the user's friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;