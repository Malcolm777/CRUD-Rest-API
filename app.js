const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true}) //to connect a new URL 
const con = mongoose.connection //framework for connecting to database 

con.on('open', () => {  
    console.log('connected...')
} )

app.use(express.json())

const alienRouter = require( './routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => { 
    console.log('Server started')
})