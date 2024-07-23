const express = require('express');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const menuItem = new MenuItem(req.body);
        const response = await menuItem.save();
        console.log('menu data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched.');
        res.status(200).json(data);
    } catch (err) {
        console.log('err');
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if (tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy') {
            const data = await MenuItem.find({ taste: tasteType });
            console.log('response fetched.');
            res.status(200).json(data);
        } else {
            res.status(400).json({ error: 'Invalid taste type' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedMenuData = req.body;
        const response = await MenuItem.findByIdAndUpdate(id, updatedMenuData, {
            new: true, //return the updated document
            runValidators: true, //run mongoose  validation
        })
        if (!updatedMenuData) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        console.log('data updated..');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await MenuItem.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ error: 'MenuItem not found' });
        }
        console.log('data deleted..');
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports = router;