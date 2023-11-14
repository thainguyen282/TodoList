const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const TodoModel = require('./models/Todo')



const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5500;

const TodoItemRoute = require('./routes/Todo')


mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database connected"))
.catch(err => console.log(err))

app.use('/')
// app.get('/get', (req, res) => {
//     TodoModel.find()
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.post('/add', (req, res) => {
//     const task = req.body.task;
//     TodoModel.create({
//         task: task

//     }).then(result => res.json(result))
//     .catch(err=>res.json(err))

// })
app.listen(PORT, () => {
    console.log("Server is running")
})