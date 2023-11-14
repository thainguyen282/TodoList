const mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    percent:float,
    done : {
        type: Boolean, 
        default: false
    }
})

const TodoModel = mongoose.model("Todos", TodoSchema)
module.exports = TodoModel