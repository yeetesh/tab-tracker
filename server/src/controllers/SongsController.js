const Song = require('../models/Song')

module.exports = {
    createSong(req,res) {
        Song.create( req.body, function (err, doc) {
            if (err) {
                //res.send('Could not create Song2')
                console.log(req.body)
                res.send(err)
            }
            else {
                res.send(doc)
            }
        })
    },
    getSongs(req,res) { 
        console.log('Fucntion called')
        Song.find({}, function (err, songs) {
            if (songs === null || songs.length === 0) 
                res.send('Could not find songs')
            else 
            {
                    res.send(songs)       
            }
          })
    }
}