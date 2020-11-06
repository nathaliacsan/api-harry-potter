const mongoose = require('mongoose')
const Schema = mongoose.Schema

const harryPotterSchema = new Schema ({

    _id: {
        type: mongoose.Schema.Types.ObjectId, 
        auto: true, 
        required: true 
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    species: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    house: {
        type: String,
        required: false
    },
    dateOfBirth: {
        type: String,
        required: false
    },
    yearOfBirth: {
        type: Number,
        required: false
    },
    ancestry: {
        type: String,
        required: false
    },
    eyeColour: {
        type: String,
        required: false
    },
    hairColour: {
        type: String,
        required: false
    },
    wand: {
        wood: String,
        core: String,
        length: Number
    },
    patronus: {
        type: String,
        required: false
    },
    hogwartsStaff: {
        type: Boolean,
        required: false
    },
    actor: {
        type: String,
        required: true,
        unique: true
    },
    alive: {
        type: Boolean,
        required: false
    },
    image: {
        type: String,
        required: false
    },
},
    {
        collection: 'harryPotter',
        versionKey: false
    }
)

const harryPotterCollection = mongoose.model('harryPotter', harryPotterSchema)

module.exports = {harryPotterCollection}