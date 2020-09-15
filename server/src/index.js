global.mongo = require('mongodb').MongoClient
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const mwPublicRoute = require('./middleware/public-route')
const mwCookie = require('./middleware/cookie')
const { findAll, findById, addOneRecord, delManyRecord } = require('./controller/user')
const { validateInsertUser, validateDeleteUser } = require('./utils/validate')
dotenv.config();

const port = process.env.PORT || 5000

const app = express()
const middleware = [
  express.json(),
  cors(),
  mwPublicRoute(),
  cookieParser(),
  mwCookie()
]

app
  .use(middleware)
  .get('/api/user', findAll)
  .get('/api/user/:pid', findById)
  .post('/api/user', validateInsertUser, addOneRecord)
  .delete('/api/user', validateDeleteUser, delManyRecord)

app.listen(port, () => console.log(`server online port ${port}`))

module.exports = app