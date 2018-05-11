const User = require('./models/User')

module.exports = (app) => {
    app.post('/register', (req,res) => {
        User.create({email : req.body.email,password : req.body.password}, function(err, doc) {
            if (err) console.log(err)
            else console.log(doc)
          });
        res.send('Email registered ' + req.body.email)
        console.log('Email registered ' + req.body.email)
    }),
    app.post('/login', (req,res) => {
        res.send('Email logged in ' + req.body.email)
    })   
}