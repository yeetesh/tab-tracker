const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
routes(app)


mongoose.connect('mongodb://localhost/tab-tracker')
    .then(() => {
        console.log('MongoDB Connected and server started')
        app.listen(8081)
    })
    .catch(err => console.log(err)) 



//part 3, 30 mins up. Implement login in client and server side, watch further for tokens