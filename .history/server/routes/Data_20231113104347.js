const router = require('express').Router();

const DataItemModel = require('../models/Data')

// router.post('/api/stat', async (req, res) => {
//     try {
//         const newDataItem = new DataItemModel({
//             percent: 0,
//             total: 0
//         })

//         const saveDataItem = await newDataItem.save()
//         res.status(200).json('Item added successfully');
//     }
//     catch(err){
//         res.json(err);
//     }
// })

router.get('/api/stat', async (req, res) => {
    try {
        const allDataItems = await DataItemModel.find({});
        res.status(200).json(allDataItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
Changes made:

Added console.error(err) to log the error in the server console. This can be useful for debugging purposes.
Modified the response in the catch block to send a 500 status with a JSON object containing an error property with the error message. This provides more detailed information about the error to the client.
These modifications can help you identify issues more easily when something goes wrong with the data retrieval process. Make sure to replace your existing route with this updated version and test the endpoint again.







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