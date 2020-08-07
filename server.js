import express from 'express'
import cors from 'cors'
import db from './db.json'

const server = express()

server.use(cors())
server.use(express.json());

const port = process.env.PORT ?? 3000

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

server.get('/energylevels', (req, res) => {
    console.log('got get')
    console.log(db.students.find(student => student.id == req.query.id))
    res.json(db.students.find(student => student.id == req.query.id))
    //res.end('jo')
})

server.post('/energylevels', (req, res) => {
  console.log('working')
  db.energylevels.push(req.body)
  res.statusCode = 200
  res.end(req.body)
})