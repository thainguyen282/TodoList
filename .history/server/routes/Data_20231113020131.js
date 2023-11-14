const router = require('express').Router();

const DataItemModel = require('../models/Data')

router.post('/api/data', async (req, res) => {
    try {
        const newDataItem = new DataItemModel({
            task : req.body.task
        })

        const saveDataItem = await newDataItem.save()
        res.status(200).json('Item added successfully');
    }
    catch(err){
        res.json(err);
    }
})

router.get('/api/data', async (req, res) => {
    try {
        const allTodoItems = await todoItemModel.find({})
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
})

router.put('/api/data/:id', async (req, res) => {
    try{
        const existingItem = await todoItemModel.findById(req.params.id);
        const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {done: existingItem.done === true ? false : true})
        res.status(200).json('Item updated');
    } catch(err){
        res.json(err);
    }
})

module.exports = router;