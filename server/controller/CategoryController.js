
var Category = require('../model/category')

exports.createCategoryByAdmin = (req,res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message: "Content can not be empty"})
        return;
    }

    // new User
    const category = new Category({
        name: req.body.name,

    })

    // save user in database
    category
    .save(category)
    .then(data => {
        //res.send(data)
        res.redirect('/admin/categories')
    })
    .catch(err => {
        res.status(500).send({message: err.message || 'Some error ocurred while creating a create operation'})
    })

}

// get all cats or get cat 
exports.find = (req,res) => {
    if(req.query.id) {
        const id = req.query.id;
        Category.findById(id)
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
    Category.find()
    .then(category => {
        res.send(category)
    }) 
    .catch(err => {
        res.status(500).send({message: err.message || 'Error occured while retriving user information'})
    })
        
    }

}

// update 

exports.updateCategory = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data update can not be empty'})

    }
    const id = req.params.id;
    Category.findByIdAndUpdate(id,req.body, {categoryFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: `Maybe User not found`})
        }else { 
            res.redirect('/admin/categories')
        }
    })
    .catch(err => {
        res.status(500).send({message: 'Err update information'})
    })

}


exports.deleteCategory = (req, res) => {
    const id = req.params.id;

    Category.findByIdAndDelete(id) 
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