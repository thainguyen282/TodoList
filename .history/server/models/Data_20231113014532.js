const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: {
        type: Number, 
        required: true, 
        min: 0, 
        max: 100
    },
    total: {
        type: BigInt, 
        require: true
    }
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel