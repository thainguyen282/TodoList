const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: {
        type: 
    } 
    total: BigInt
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel