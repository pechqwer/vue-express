const { exception_author } = require('../utils/exception')
const _get = require('lodash.get')
const _empty = require('lodash.isempty')

module.exports = () => {
    return (req, res, next) => {
        if (req.isPublic) return next()

        const token = _get(req, 'cookies.token', '')

        if (token === '' || _empty(req.cookies)) return res.status(exception_author.status).send(exception_author.info).end()
        
        req.token = token

        next()
    }
}