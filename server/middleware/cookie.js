const { exception_author } = require('../utils/exception')
const _get = require('lodash.get')

module.exports = () => {
    return (req, res, next) => {
        if (req.isPublic) return next()

        const token = _get(req, 'cookie.token', '')
        if (token === '') return res.send(exception_author.info).status(exception_author.status).end()
        
        req.token = token

        next()
    }
}