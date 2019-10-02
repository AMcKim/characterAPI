const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    strength: {
        type: Number,
        max: 20,
        required: false
    },
    dexterity: {
        type: Number,
        max: 20,
        required: false
    },
    constitution: {
        type: Number,
        required: false
    },
    intelligence: {
        type: Number,
        max: 20,
        required: false
    },
    wisdom: {
        type: Number,
        max: 20,
        required: false
    },
    charisma: {
        type: Number,
        max: 20,
        required: false
    }
});

module.exports = mongoose.model('characters', characterSchema);