const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: Number,
    total: Number
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel