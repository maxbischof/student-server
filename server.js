import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './db.json'

const server = express()

server.use(cors())
server.use(bodyParser.json());

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
  console.log(db.energylevels)
})