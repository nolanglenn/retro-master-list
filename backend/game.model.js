const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    Title: {
        type: String
    },
    Year: {
        type: String
    },
    Platform: {
        type: String
    }
});

module.exports = mongoose.model('Game', Game);