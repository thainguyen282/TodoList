const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    task:String,
    done : {
        type: Boolean, 
        default: true
    }
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel