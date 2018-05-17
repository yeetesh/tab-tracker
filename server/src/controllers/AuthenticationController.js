const User = require('../models/User')
const jwt = require('jsonwebtoken')

function signUser(user) {
    return jwt.sign(user.toJSON(), 'secret')
}

module.exports = {
    register(req,res) { 
        User.create( { email : req.body.email,password : req.body.password }, function (err, doc) {
            if (err) {
                console.log(err)
                res.send('Could not register')
            }
            else {
                res.send('Registered')
            }
        });
    },
    login(req,res) {
        User.findOne({ email : req.body.email }, function (err, user) {
            if (user === null) 
                res.send('Could not find user')
            else 
            {
                if(user.password === req.body.password)
                {   
                    console.log(user.password,req.body.password)
                    var token = signUser(user)
                    res.send({ user : user, token : token})   
                }
                else 
                    res.send('Invalid credentials')
            }
          })
    }
}