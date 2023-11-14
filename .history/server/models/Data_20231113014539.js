const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: {
        type: Number, 
        min: 0, 
        max: 100
    },
    total: {
        type: BigInt, 
    }
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel