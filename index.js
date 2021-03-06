require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const shopsRouter = require('./routers/shops.router')
const accountRouter = require('./routers/account.router')

const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const url = process.env.MONGOOSE_URL2
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} )

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongooes data connection successfully")
})

app.use('/shops', shopsRouter);
app.use('/account', accountRouter);

app.get('/',(req,res) => {
    res.send('This is server API THE FROG');
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})