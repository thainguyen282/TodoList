const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent: Number,
    total: BigInt
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel