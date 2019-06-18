console.log("about to require dotenv")
require('dotenv').config()
console.log("finished requiring dotenv")
console.log(process.env)
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')


// morgan.token('body', (req) => {
//   return JSON.stringify(req.body)
// })

// app.use(cors())
// app.use(bodyParser.json())
// app.use(morgan(`:method :url :status :res[content-length] - :response-time ms :body`))
// app.use(express.static('build'))

// let persons = [
//   {
//     "name": "Arto Hellas",
//     "number": "040-123456",
//     "id": 1
//   },
//   {
//     "name": "Ada Lovelace",
//     "number": "39-44-5323523",
//     "id": 2
//   },
//   {
//     "name": "Dan Abramov",
//     "number": "12-43-234345",
//     "id": 3
//   },
//   {
//     "name": "Mary Poppendieck",
//     "number": "39-23-6423122",
//     "id": 4
//   }
// ]


// app.get('/api/persons', (req, res) => {
//   res.json(persons)
// })

// app.get('/api/persons/:id', (req, res) => {
//   Person.findById(req.params.id).then(person => {
//     res.json(person.toJSON())
//   })

// })

// app.delete('/api/persons/:id', (req, res) => {
//   Person.findByIdAndRemove(req.params.id)
//     .then(result => {
//       res.status(204).end()
//   })
//   .catch(error => next(error))
// })

// app.post('/api/persons', (req, res) => {
//   const body = req.body

//   if (!body.name) {
//     return res.status(400).json({
//       error: 'name missing'
//     })
//   }
//   if (!body.number) {
//     return res.status(400).json({
//       error: 'number missing'
//     })
//   }
//   if (persons.findIndex(person => person.name == body.name) >= 0) {
//     return res.status(400).json({
//       error: 'name must be unique'
//     })
//   }

//   const person = new Person({
//     name: body.name,
//     number: body.number
//   })

//   person.save().then(savedPerson => {
//     res.json(savedPerson.toJSON())
//   })
// })


// app.get('/info', (req, res) => {
//   res.send(`<p>Phonebook has info for ${persons.length} people</p>
//             <p>${new Date()}`)
// })


// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
