const express = require('express')
const cookieParser = require('cookie-parser')

const cors = require('cors')
const dotenv = require('dotenv');
const mwPublicRoute = require('./middleware/public-route')
const mwCookie = require('./middleware/cookie')

const { findAll, findById } = require('./controller/user')
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
  .get('/user', findAll)
  .get('/user/:pid', findById)

app.listen(port, () => console.log(`server online port ${port}`))