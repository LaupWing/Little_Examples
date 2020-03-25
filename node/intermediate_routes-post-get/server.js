const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/routeHandler')

app.use(routes)
app.listen(port, ()=>console.log(`Listening to port ${port}`))