const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: number,
    total: big
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel