const mongoose = require('mongoose')

var users = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique: true

    },
    password : {
        type: String,
        required : true
    }, 
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: String,
        required : true
    }

})


const Users = mongoose.model('users', users)

module.exports = Users;