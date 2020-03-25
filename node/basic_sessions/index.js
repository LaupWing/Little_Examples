const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(express.static('public'))
    .use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: { 
            secure: false,
            sameSite: true,
            maxAge: 3600000
        }
    }))
    .post('/login', (req,res)=>{
        req.session.email = req.body.email
        req.session.password = req.body.password
        res.redirect('/home')
    })
    .get('/home', (req,res)=>{
        console.log(req.session.email)
        res.send('hello')
    })
    .listen(3030, ()=>console.log('Server is listening'))