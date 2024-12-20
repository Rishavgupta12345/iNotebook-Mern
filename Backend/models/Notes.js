const mongoose = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    descrioption:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('note',NoteSchema);