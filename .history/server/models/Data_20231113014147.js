const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent: parseFloat,
    
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel