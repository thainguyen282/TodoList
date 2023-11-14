const router = require('express').Router();

const todoItemModel = require('../models/Todo')

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemModel({
            task : req.body.task
        })

        const saveItem = await newItem.save()
        
    }
    catch(err){
        res.json(err);
    }
})