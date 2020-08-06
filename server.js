import express from 'express'
import cors from 'cors'
import db from './db.json'

const server = express()

server.use(cors())

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