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

server.get('/buddys', (req, res) => {
  res.json(db.buddys)
})

server.get('/energylevels', (req, res) => {
  res.json(db.energylevels)
})

server.post('/energylevels', (req, res) => {
  console.log('working')
  db.energylevels.push(req.body)
  res.statusCode = 200
  res.end('Data received')
  console.log(db.energylevels)
})