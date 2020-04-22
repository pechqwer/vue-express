const _empty = require('lodash.isempty')
const { not_found, bad_data, exception_service } = require('../utils/exception')
const { mapQueryUser } = require('../utils/mapQuery')
const { mapFieldUser, mapTypeofUser } = require('../utils/mapField')

const _connect = async () => {
  return await mongo.connect(`mongodb+srv://${process.env.USER_TEDDY}:${process.env.PASS_TEDDY}@cluster0-mq8f9.mongodb.net/test`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
}

const findAll = async (req, res) => {
  if (_empty(req.query)) return res.status(bad_data.status).send({ info: 'query-string is least one' }).end()
  if (!mapQueryUser(req.query)) return res.status(bad_data.status).send({ info: 'query-string is not work' }).end()

  const con = await _connect()
  const user = con.db('teddy').collection('user')
  const query = mapTypeofUser(req.query)
  const data = await user.find(query).toArray()

  if (data.length === 0) {
    const _syntax = not_found('user')
    return res.status(_syntax.status).send(_syntax.info).end()
  }

  return res.status(200).send(data).end()
}

const findById = async (req, res) => {
  if (_empty(req.params)) return res.status(bad_data.status).send({ info: 'parameter is not true' }).end()
  if (!_empty(req.query)) return res.status(bad_data.status).send({ info: 'primary key is not support query-string' }).end()
  if (!mapQueryUser(req.query)) return res.status(bad_data.status).send({ info: 'query-string is not work' }).end()

  const con = await _connect()
  const user = con.db('teddy').collection('user')
  const query = mapTypeofUser(req.params)
  const data = await user.find(query).toArray()

  if (data.length !== 1) {
    const _syntax = not_found('user')
    return res.status(_syntax.status).send(_syntax.info).end()
  }

  return res.status(200).send(data[0]).end()
}

const addOneRecord = async (req, res) => {
  const con = await _connect()
  const user = con.db('teddy').collection('user')
  const data = mapFieldUser(req.body)
  await user.insertOne(data, (err, _) => {
    if (err) return res.status(exception_service.status).send(exception_service.info).end()
  })
  return res.status(200).end()
}

const delManyRecord = async (req, res) => {
  const con = await _connect()
  const user = con.db('teddy').collection('user')
  const data = mapTypeofUser(req.body)
  const result = await user.deleteMany(data, (err, _) => {
    if (err) return res.status(exception_service.status).send(exception_service.info).end()
  })
  console.log(result)
  return res.status(200).end()
}

module.exports = {
  findAll, findById, addOneRecord, delManyRecord
}