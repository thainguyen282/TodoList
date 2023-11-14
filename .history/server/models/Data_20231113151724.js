const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: Number,
    total: Number, 
    numFin
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel