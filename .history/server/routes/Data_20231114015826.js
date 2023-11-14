const router = require('express').Router();

const DataItemModel = require('../models/Data')

router.post('/api/stat', async (req, res) => {
    try {
        const newDataItem = new DataItemModel({
            percent: req.body.percent,
            total: req.body.total,
            numCheck: req.body.numCheck
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

const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Your route handling the PUT request
app.put('/api/data/655285310ba7219d1bb06276', async (req, res) => {
    try {
        const updateDataItem = await DataItemModel.findByIdAndUpdate(
            '655285310ba7219d1bb06276',
            {
                total: req.body.total,
                percent: req.body.percent,
                numCheck: req.body.numCheck,
            },
            { new: true }
        );
    
        if (!updateDataItem || Object.keys(updateDataItem).length === 0) {
            console.log('Item not found');
            return res.status(404).json({ message: 'Item not found' });
        }
    
        res.status(200).json({ message: 'Item updated', updatedItem: updateDataItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
});

module.exports = router;