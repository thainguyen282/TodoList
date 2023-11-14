const router = require('express').Router();

const DataItemModel = require('../models/Data')

router.post('/api/stat', async (req, res) => {
    console.log('Route accessed');
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


// Your route handling the PUT request
router.put('/api/stat/655285310ba7219d1bb06276', async (req, res) => {
    console.log('Route accessed');
    try {
        const updateDataItem = await DataItemModel.findByIdAndUpdate(
            '655285310ba7219d1bb06276',
            {
                total: 50,
                percent: 50,
                numCheck: 50,
            },
            { new: true }
        );

        res.status(200).json('Item updated');
    } catch (err) {
        res.json(err);
    }
    
});

module.exports = router;