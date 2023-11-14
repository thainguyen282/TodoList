const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const TodoModel = require('./models/Todo')
const DataModel = require('./models/Data')



const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5500;

const TodoItemRoute = require('./routes/Todo')


mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

app.listen(PORT, () => {
    console.log("Server is running")
})