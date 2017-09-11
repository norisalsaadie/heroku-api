const server = require('express')()
const {users, headlines} = require('./data')
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3001

server
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(compression())
  .get('/', (req, res, next) => res.json({message: 'hello and welcome'}))
  .get('/users', (req, res, next) => res.json({users}))
  .get('/headlines', (req, res, next) => res.json({headlines}))
  .listen(PORT, () => console.log('I am alive'))
