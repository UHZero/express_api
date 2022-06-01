const express = require('express')
const mongoose = require('mongoose')

const port = 3333

mongoose.connect('mongodb+srv://UHZero:SenhaSenha@cluster0.raa65.mongodb.net/test')

const client = express()

client.use(express.json()) // .use serve para incluir

const Drink = mongoose.model('Drink', {
    name: String, price: Number, available: Boolean
})

client.get('/drinks', (req, res) => {
    const { sort, available } = req.query //query é '?'
    const filters = {}; //perguntar porque do obj vazio

    if (Boolean(available)) {
        filters.available = {
            $eq: false
        }
    }

    Drink.find(filters).sort([['name', sort]]).then((response) => {
        res.json(response)
    })
    //res.send('Hello Dev')
})

client.get('/drink/:name', (req, res) => {
    const { name } = req.params

    Drink.findOne({
        _name: name
    }).then((drink) => {
            res.json(drink)
        })
        
})

client.post('/drink', (req, res) => {
    const { name, price, available } = req.body //body é o corpo do json

    const drink = new Drink({
        name,
        price,
        available
    })

    drink.save().then((response) => {
        res.json(response);
    })
})

client.put('/drink/:name', (req, res) => {
    const { name } = req.params // pega um unico atributo/parametro

    Drink.findOneAndUpdate(
        { _name: name },
        req.body,
        {
            new: true,
            overwrite: true
        }
    ).then((updatedDrink) => res.json(updatedDrink))
})

client.patch('/drink/:name', (req, res) => {
    const { name } = req.params

    Drink.findOneAndUpdate(
        { _name: name },
        req.body,
        {
            new: true
        }
    ).then((updatedUser) => res.json(updatedUser))
})

client.delete('/drink/:name', (req, res) => {
    const { name } = req.params

    Drink.findOneAndUpdate({ _name: name }, {
        $set: {
            available: false
        }
    }, {
        upsert: true, //perguntar sobre upsert
    }).then((availableDrink) => res.json(availableDrink))
})


client.listen(port, () => {
    console.log(`server running at ${port} port!!!`)
})