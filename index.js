require('dotenv').config()
const express = require('express'),
    Person = require('./models/person'),
    morgan = require('morgan'),
    cors = require('cors'),
    app = express()
app.use(express.static('build'))
app.use(express.json())

app.use(cors())

morgan.token('body', (req, res) => {
    console.log(req.body)
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => res.json(people))

})

app.get('/info', (req, res) => {
    Person.find({}).then(people => res.send(`<p>Phonebook has info for ${people.length} people</p><p>${new Date()}</p>`))
})


app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        person ? res.json(person) : res.status(404).end()
    }).catch(error => next(error))
})


app.delete('/api/persons/:id', (req, res, next) => {
    // const id = Number(req.params.id)
    // persons = persons.filter(p => p.id !== id)
    // res.status(204).end()
    Person.findByIdAndRemove(req.params.id).then(result => res.status(204).end())
        .catch(error => next(error))
})

app.post('/api/persons', (req, res,next) => {


    const person = new Person({name: req.body.name, number: req.body.number})
    person.save().then(saved => res.json(saved))
        .catch(error=>next(error))

})

app.put('/api/persons/:id', (req, res, next) => {
    console.log('@@@')
    console.log(req.body)
    console.log('@@@')
    const person = {
        name: req.body.name,
        number: req.body.number
    }
    Person.findByIdAndUpdate(req.params.id, person, {new: true})
        .then(updatedPerson => {
            updatedPerson ? res.json(updatedPerson) : res.status(404).end()
        })
        .catch(error => next(error))

})


const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return res.status(400).send({error: 'malformatted id'})
    }
    if (error.name === 'ValidationError') {
        return res.status(400).json({error: error.message})
    }
    next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
