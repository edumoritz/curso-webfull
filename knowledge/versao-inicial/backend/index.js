const app = require('express')()
const consign = require('consign')

consign()
  .then('./config/middlewares.js')
  .then(app)

app.listen(3000, () => {
  console.log('Backend executando...')
})