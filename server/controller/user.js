const mongo = require('mongodb').MongoClient
const _empty = require('lodash.isempty')
const { not_found, bad_data } = require('../utils/exception')
const { mapFieldUser } = require('../utils/mapQuery')

const _connect = async () => {
  return await mongo.connect(`mongodb+srv://${process.env.USER_TEDDY}:${process.env.PASS_TEDDY}@cluster0-mq8f9.mongodb.net/test`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
}

const findAll = async (req, res) => {
  if (_empty(req.query)) return res.send({ info: 'query-string is least one' }).status(bad_data.status)
  if (!mapFieldUser(req.query)) return res.send({ info: 'query-string is not work' }).status(bad_data.status)

  const con = await _connect()
  const user = con.db('teddy').collection('user')
  const data = await user.find(_empty(req.query) ? {} : req.query).toArray()

  if (data.length === 0) {
    const _syntax = not_found('user')
    return res.send(_syntax.info).status(_syntax.status)
  }

  return res.send(data).status(200)
}

const findById = async (req, res) => {
  if (_empty(req.params)) return res.send({ info: 'parameter is not true' }).status(bad_data.status)
  if (!_empty(req.query)) return res.send({ info: 'primary key is not support query-string' }).status(bad_data.status)
  if (!mapFieldUser(req.query)) return res.send({ info: 'query-string is not work' }).status(bad_data.status)

  const con = await _connect()
  const user = con.db('teddy').collection('user')
  const data = await user.find(req.params).toArray()

  if (data.length !== 1) {
    const _syntax = not_found('user')
    return res.send(_syntax.info).status(_syntax.status)
  }

  return res.send(data[0]).status(200)
}

module.exports = {
  findAll, findById
}