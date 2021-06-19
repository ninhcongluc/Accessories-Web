const axios = require('axios')


exports.loginRoutes = (req,res) => {
    res.render('login')
}

exports.registerRoutes = (req,res) => {
    res.render('register')
}


exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3030/api/products')
    .then(products => {
        res.render('home', {products : products.data})
    })
    .catch(err => {
        res.send(err)
    })
    
    
}

exports.getHomeSearch = (req,res) => {
    axios.get('http://localhost:3030/api/products/search')
    .then(products => {
        res.render('home', {products : products.data})
    })
    .catch(err => {
        res.send(err)
    })
    
    
}

exports.detailRoutes = (req,res) => {
    axios.get('http://localhost:3030/api/products', {params: {id: req.query.id}})
    .then((product) => {
       res.render('detail', {product : product.data});
       console.log(product)
    })
    .catch(err => {
        res.send(err)
    })
    
    
}


exports.adminRoutes = (req,res) => {
    res.render('admin')
}

exports.adminUserRoutes = (req,res) => {
    axios.get('http://localhost:3030/api/users')
    .then(users => {
        res.render('include/users/_user', {users : users.data})
    })
    .catch(err => {
        res.send(err)
    })
}


exports.adminUserAddRoutes = (req,res) => {
    res.render('include/users/_add-user')
}

exports.adminUpdateUser = (req,res) => {
    axios.get('http://localhost:3030/api/users', {params: {id: req.query.id}})
    .then((user) => {
       res.render('include/users/_update-user', {user : user.data});
    })
    .catch(err => {
        res.send(err)
    })

 
     
 }

 // category admin page


 exports.adminCategoryRoutes = (req,res) => {

    axios.get('http://localhost:3030/api/categories')
    .then(categories => {
        res.render('include/categories/_category', {categories: categories.data})
    })
    .catch(err => {
        res.send(err)
    })
    

}



exports.adminCategoryAddRoutes = (req,res) => {
    res.render('include/categories/_add-category')
}

exports.adminUpdateCategory = (req,res) => {
    axios.get('http://localhost:3030/api/categories', {params: {id: req.query.id}})
    .then((category) => {
       res.render('include/categories/_update-category', {category : category.data});
    })
    .catch(err => {
        res.send(err)
    })
   
 }


 // product

 exports.adminProductRoutes = (req,res) => {
    axios.get('http://localhost:3030/api/products')
    .then(products => {
        res.render('include/products/_product', {products: products.data})
    })
    .catch(err => {
        res.send(err)
    })



}

exports.adminProductAddRoutes = (req,res) => {
    axios.get('http://localhost:3030/api/categories')
    .then(categories => {
        res.render('include/products/_add-product', {categories: categories.data})
    })
    .catch(err => {
        res.send(err)
    })
}

exports.adminUpdateProduct = (req,res) => {
    axios.get('http://localhost:3030/api/products', {params: {id: req.query.id}})
    .then((product) => {
       res.render('include/products/_update-product', {product : product.data});
    })
    .catch(err => {
        res.send(err)
    })
 
 }
