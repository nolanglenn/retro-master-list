const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    title: {
        type: String
    },
    year: {
        type: Date
    },
    platform: {
        type: String
    }
});

module.exports = mongoose.model('Game', Game);