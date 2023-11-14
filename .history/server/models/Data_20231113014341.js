const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent: Number,
    total: BigInt
})

const DataModel = mongoose.model("Todos", TodoSchema)
module.exports = Data