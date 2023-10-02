const mongoose = require("mongoose");
const Joi = require('joi')
Joi.objectID =require('joi-objectid')(Joi)

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

function validator(song){
    const schema ={
        author:Joi.string().required(),
        musicTitle:Joi.string().required(),
        publishedDate:Joi.date().required(),
    }
    return Joi.validate(song,schema)
}

exports.validator = validator
exports.Playlist = Playlist