const express =require('express')
const services = require('../services/render')

const route = express.Router()
const controller = require('../controller/UserController')

const catController = require('../controller/CategoryController')

const productController = require('../controller/ProductController')


// router 
route.get('/', services.loginRoutes )
route.get('/login', services.loginRoutes )

route.get('/register', services.registerRoutes )

route.get('/home', services.homeRoutes )
route.get('/home/detail', services.detailRoutes )

route.get('/admin', services.adminRoutes )
//ADMIN for USERS
route.get('/admin/users', services.adminUserRoutes )
route.get('/admin/users/add', services.adminUserAddRoutes )
route.get('/admin/update-user', services.adminUpdateUser);

// admin for categories
route.get('/admin/categories', services.adminCategoryRoutes )
route.get('/admin/categories/add', services.adminCategoryAddRoutes )
route.get('/admin/update-categories', services.adminUpdateCategory);
// admin for products
route.get('/admin/products', services.adminProductRoutes )
route.get('/admin/products/add', services.adminProductAddRoutes )
route.get('/admin/update-products', services.adminUpdateProduct);


// api 

// register api
route.post('/api/users', controller.create);
// login api
route.post('/api/user', controller.login);
// get all user
route.get('/api/users', controller.find);

//api for admin
route.post('/api/admin/add_users', controller.createUserByAdmin);
// update user
route.put('/api/users/:id', controller.updateUser)
//delete user
route.delete('/api/users/:id', controller.deleteUser)

// category api


// add category
route.post('/api/admin/add_categories', catController.createCategoryByAdmin);
// get all category
route.get('/api/categories', catController.find);
// update category
route.put('/api/categories/:id', catController.updateCategory)
//delete category
route.delete('/api/categories/:id', catController.deleteCategory)

// product API 

// add product
route.post('/api/admin/add_products', productController.createProductByAdmin);

// get all product
route.get('/api/products', productController.find);

// add product
route.post('/api/admin/add_products', productController.createProductByAdmin);

// update product
route.put('/api/products/:id', productController.updateProduct)

//delete category
route.delete('/api/products/:id', productController.deleteProduct)

// search product
route.post('/api/products/search', productController.findName) 

module.exports = route