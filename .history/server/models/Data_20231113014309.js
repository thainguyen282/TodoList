const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent: Number,
    total: 
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel