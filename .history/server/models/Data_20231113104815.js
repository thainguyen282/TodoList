const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: Number,
    total: Schema.type
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel