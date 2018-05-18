const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const SongSchema = new Schema({
  title : {
    type: String,
    required: true,
    //unique : true
  },
  artist : {
    type: String,
    required: true
  },
  album : {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  },
  youtubeId : {
    type: String,
    required: true
  },
  lyrics : {
    type: String,
    required: true
  },
  tab : {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('songs', SongSchema)