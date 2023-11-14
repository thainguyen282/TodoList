const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent: Number,
    total: BigInt
})

const DataModel = mongoose.model("Dodos", TodoSchema)
module.exports = DataModel