console.log('Working');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req,res) => {
    res.send('Working boys')
})
app.listen(8081)
