const router = require('express').Router();

const todoItemModel = require('../models/Todo')

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemModel({
            task : req.body.task
        })

        const saveItem = await newItem.save()
        res.status(200).json('Item added successfully');
    }
    catch(err){
        res.json(err);
    }
})

router.get('/api/item', async (req, res) => {
    try {
        const allTodoItems = await todoItemModel.find({})
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
})

router.put('/api/item/:id', async (req, res) => {
    try{
        const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {done: })
        res.status(200).json('Item updated');
    } catch(err){
        res.json(err);
    }
})

router.delete('/api/item/:id', async (req, res) => {
    try{
        const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item deleted');
    } catch(err){
        res.json(err);
    }
})



module.exports = router;