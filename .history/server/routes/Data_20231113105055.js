const router = require('express').Router();

const DataItemModel = require('../models/Data')

router.post('/api/stat', async (req, res) => {
    try {
        const newDataItem = new DataItemModel({
            percent: 0,
            total: 0
        })

        const saveDataItem = await newDataItem.save()
        res.status(200).json('Item added successfully');
    }
    catch(err){
        res.json(err);
    }
})

router.get('/api/stat', async (req, res) => {
    try {
        const allDataItems = await DataItemModel.find({});
        res.status(200).json(allDataItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});





// router.put('/api/data/:id', async (req, res) => {
//     try{
//         const existingItem = await todoItemModel.findById(req.params.id);
//         const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {done: existingItem.done === true ? false : true})
//         res.status(200).json('Item updated');
//     } catch(err){
//         res.json(err);
//     }
// })

module.exports = router;