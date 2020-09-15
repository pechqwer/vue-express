const { exception_author } = require('../utils/exception')

module.exports = () => {
  return (req, res, next) => {
    let isPublic = false
    switch (req.method) {
      case "GET": isPublic = ['/api/user'].some(ele => { return req.originalUrl.includes(ele) }); break
      case "POST": break
      case "DELETE": break
      default: res.status(exception_author.status).send(exception_author.info).end(); break
    }

    req.isPublic = isPublic

    next()
  }
}