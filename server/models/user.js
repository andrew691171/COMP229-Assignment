// require modules for the user Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let Model = mongoose.Schema;
let Schema = mongoose.Schema;

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: "",
            trim: true,
            required: "username is required"
        },
        /*
        password: 
        {
            type: String,
            default: '';
            trim: true,
            required: 'password is required'
        }
        */
        email:
        {
            type: String,
            default: "",
            trim: true,
            required: 'email adress is required'
        },

        diplayName:
        {
            type: String,
            default: "",
            trim: true,
            required: 'Display Name is required'
        },

        created:
        {
            type: Date,
            default: Date.now,
        },

        updated:
        {
            type: Date,
            default: Date.now,
        }

    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
