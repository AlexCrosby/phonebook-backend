console.log('hello world')
const express = require('express'),
    morgan = require('morgan')
    app = express()
app.use(express.json())
cors= require('cors')
app.use(cors())

morgan.token('body',(req,res)=>{
    console.log(req.body)
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [{
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
},
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
})


app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => id === p.id)
    person ? res.json(person) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    if (persons.find(p => p.name === req.body.name)) {
        // Name already exists
        res.json({error: 'name must be unique'})
    } else if (!req.body.name || !req.body.number) {
        res.json({error: 'name or number missing'})
    } else {

        const person = {name: req.body.name, number: String(req.body.number), id: Math.floor(Math.random() * 100000)}
        persons.push(person)
        res.json(person)
    }


})


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>console.log(`Server running on ${PORT}`))
