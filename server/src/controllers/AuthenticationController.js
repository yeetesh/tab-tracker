const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')

function signUser(user) {
    return jwt.sign(user.toJSON(), 'secret')
}

function hash(password) {
    return bcrypt.hashSync(password)
}

function comparePassword(password,hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    register(req,res) { 
        var password = hash(req.body.password)
        User.create( { email : req.body.email,password : password }, function (err, doc) {
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
                if(comparePassword(req.body.password,user.password))
                {   
                    var token = signUser(user)
                    res.send({ user : user, token : token})   
                }
                else 
                    res.send('Invalid credentials')
            }
          })
    }
}