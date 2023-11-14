const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent: parseFloat,
    total: int
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel