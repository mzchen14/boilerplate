const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true}))

app.use('/api', require('./api'))

//for any requests that do not match one of our api routes
app.get('*', function (req, res){
  res.sendFile(path.join(__dirname, '../index.html'))
})


app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
