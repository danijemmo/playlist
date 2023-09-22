const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    musicTitle:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Date,
        required:true
    }
});

const Playlist = mongoose.model('Playlist',playlistSchema)

module.exports.Playlist = Playlist