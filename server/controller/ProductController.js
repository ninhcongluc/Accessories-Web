var Product = require('../model/product')

exports.createProductByAdmin = (req,res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message: "Content can not be empty"})
        return;
    }

    // new User
    const product = new Product({
        name: req.body.name,
        code: req.body.code,
        descript: req.body.descript,
        price: req.body.price,
        image: req.body.image,
        title:  req.body.title,
        categoryName : req.body.categoryName
    })

    // save user in database
    product
    .save(product)
    .then(data => {
        //res.send(data)
        res.redirect('/admin/products')
    })
    .catch(err => {
        res.status(500).send({message: err.message || 'Some error ocurred while creating a create operation'})
    })

}

// get products
exports.find = (req,res) => {
    if(req.query.id) {
        const id = req.query.id;
        Product.findById(id)
        .then(data => {
            if(!data) {
                res.satus(400).send({message: "Not found user with id " + id})
            }else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error retieving user with id" })
        })

    }else {
     Product.find()
    .then(products => {
        res.send(products)
    }) 
    .catch(err => {
        res.status(500).send({message: err.message || 'Error occured while retriving user information'})
    })
        
    }

}

//find by Name
exports.findName = (req,res) => {
    const key = req.body.searchByName;
 
     Product.find({name : key})
    .then(products => {
        res.render('home' , {products: products})
        
    }) 
    .catch(err => {
        res.status(500).send({message: err.message || 'Error occured while retriving user information'})
    })
        
    

}



exports.updateProduct = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data update can not be empty'})

    }
    const id = req.params.id;
    Product.findByIdAndUpdate(id,req.body, {productFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: `Maybe User not found`})
        }else { 
            res.redirect('/admin/products')
        }
    })
    .catch(err => {
        res.status(500).send({message: 'Err update information'})
    })

}


exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    Product.findByIdAndDelete(id) 
        .then((data) =>{
            if(!data) {
                res.status(400).send({message: 'Can not delete with id, may be id is wrong'})
            }else {
                // res.send({message: "User was deleted successful"})
                res.redirect('/admin/categories');
            }})
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with this id"
            })
        })
    

}