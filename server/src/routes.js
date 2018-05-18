const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register),
    app.post('/login', AuthenticationController.login),
    app.post('/song', SongsController.createSong)
    app.get('/songs',SongsController.getSongs)

}