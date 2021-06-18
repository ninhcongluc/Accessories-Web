const express = require('express')
const dotenv = require('dotenv');
const bodyparser = require('body-parser')
const app = express()
const morgan = require('morgan')
const methodOverride = require('method-override')
const path = require('path')
const connectDB = require('./server/database/connection')

//logger requests
app.use(morgan('tiny'))
// parse request to body parser
app.use(bodyparser.urlencoded({extended: true}))

dotenv.config({path: 'config.env'})
// override method
app.use(methodOverride('_method'));

// set view engine 
app.set("view engine" , "ejs")

// connect database 
connectDB();

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

const PORT = process.env.PORT || 8080

app.use('/', require('./server/routes/router'))

app.listen(PORT, (req,res) => console.log(`App is listening at http://localhost:${PORT}`))





