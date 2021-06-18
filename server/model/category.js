const mongoose = require('mongoose')

var categories = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        unique: true

    }
})


const Categories = mongoose.model('categories', categories)

module.exports = Categories;