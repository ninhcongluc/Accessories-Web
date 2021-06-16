const express =require('express')
const services = require('../services/render')

const route = express.Router()


// router 
route.get('/', services.loginRoutes )

route.get('/home', services.homeRoutes )




module.exports = route