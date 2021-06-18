const mongoose = require('mongoose')

var products = new mongoose.Schema({
    name: {
        type: String,
        required : true,
       

    },
    image : {
        type: String,
        required: true,

    },
    descript : {
        type: String,
        required : true
    }, 
    price : {
        type: String,
        required : true
    },
    code : {
        type: String,
        required: true,
        unique: true
    },

    title : {
        type: String,
        required : true

    }, 
    categoryName : {
        type: String,
        required : true

    }

})


const Products = mongoose.model('products', products)

module.exports = Products;