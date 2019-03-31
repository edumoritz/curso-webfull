const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')

app.use(saudacao('Eduardo'))

app.use((req, res, next) => {
  console.log('Antes...')
  next()
})

app.get('/opa', (req, res, next) => {
  console.log('Durante...')
  res.json({
    data: [
      {id: 7, name: 'Ana', position: 1},
      {id: 34, name: 'Bia', position: 2},
      {id: 73, name: 'Carlos', position: 3},
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })
  next()
})

app.use((req, res, next) => {
  console.log('Depois...')
})

app.listen(3000, () => {
  console.log('Backend executando!')
})