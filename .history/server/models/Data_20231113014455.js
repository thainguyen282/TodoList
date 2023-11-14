const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    percent: {
        type: Number, 
        requrired 
    } 
    total: BigInt
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel