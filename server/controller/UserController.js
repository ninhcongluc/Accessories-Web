var User = require('../model/user')


//create user

exports.create = (req,res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message: "Content can not be empty"})
        return;
    }

    // new User
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,

    })
    console.log(user)

    // save user in database
    user
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/')
    })
    .catch(err => {
        res.status(500).send({message: err.message || 'Some error ocurred while creating a create operation'})
    })

}
// 
exports.createUserByAdmin = (req,res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message: "Content can not be empty"})
        return;
    }

    // new User
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,

    })
    console.log(user)

    // save user in database
    user
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/admin/users')
    })
    .catch(err => {
        res.status(500).send({message: err.message || 'Some error ocurred while creating a create operation'})
    })

}

exports.updateUser = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data update can not be empty'})

    }
    const id = req.params.id;
    User.findByIdAndUpdate(id,req.body, {userFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: `Maybe User not found`})
        }else { 
            res.redirect('/admin/users')
        }
    })
    .catch(err => {
        res.status(500).send({message: 'Err update information'})
    })

}

// delete user by admin
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id) 
        .then((data) =>{
            if(!data) {
                res.status(400).send({message: 'Can not delete with id, may be id is wrong'})
            }else {
                // res.send({message: "User was deleted successful"})
                res.redirect('/admin/users');
            }})
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with this id"
            })
        })
    

}




exports.login = (req,res) => {
    if(!req.body) {
        res.status(400).send({message: "Content can not be empty"})
        return;
    }else {
        const username = req.body.username
        const password = req.body.password
        User.find()
        .then(users => {
            let rs = users.some((user) => (user.username == username && user.password == password))
            if(rs) {
                res.redirect('/home')
            }else {
                res.redirect('/')
            }
        }) 
        .catch(err => {
            res.status(500).send({message: err.message || 'Error occured while retriving user information'})
        })

    }

}

// get user or get users

exports.find = (req,res) => {
    if(req.query.id) {
        const id = req.query.id;
        User.findById(id)
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
     User.find()
    .then(user => {
        res.send(user)
    }) 
    .catch(err => {
        res.status(500).send({message: err.message || 'Error occured while retriving user information'})
    })
        
    }

}
