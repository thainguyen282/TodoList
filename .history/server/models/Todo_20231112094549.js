const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    item:{
        task:String,
        required: true
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel