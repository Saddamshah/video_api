
const express = require('express')
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const video_schema = new mongoose.Schema({
    count: {
        type: Number,
        require: true,
        trim: true,
    },
    user_id: {
        type: Number,
        require: true,
        trim: true,
    },
    video_url: {
        type: String,
        require: true,
        trim: true,
    },
    duration: {
        type: Number,
        require: true,
        trim: true,
    },
    team_id: {
        type: Number,
        require: true,
        trim: true,
    }
})

video_schema.plugin(mongoosePaginate);

Model = mongoose.model('Video', video_schema);
module.exports = Model;