const express = require('express');
const Person = require('../models/Person');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const person = new Person(req.body)
        const response = await person.save()
        console.log("data saved");
        res.status(200).json(response);
        // res.send(person)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched..");
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched.');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ erro: 'Internal server error' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(id, updatedPersonData, {
            new: true, //return the updated document
            runValidators: true, //run mongoose  validation
        })
        if (!updatedPersonData) {
            return res.status(404).json({ error: 'Person not found' });
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
        const response = await Person.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data deleted..');
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;