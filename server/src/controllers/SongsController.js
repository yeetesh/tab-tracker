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
        Song.find({}, function (err, songs) {
            if (songs === null || songs.length === 0) 
                res.send('Could not find songs')
            else 
            {
                    res.send(songs)       
            }
          })
    },
    getSong(req,res) {
        Song.findById(req.params.id, (err,song) => {
            if(err) {
                console.log('Song by id not found')
                res.send('Song by id not found')
            }
            res.send(song)
        })
    }
}