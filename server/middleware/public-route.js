const { exception_author } = require('../utils/exception')

module.exports = () => {
  return (req, res, next) => {
    let isPublic = false
    switch (req.method) {
      case "GET": isPublic = ['/api/user'].some(ele => { return req.originalUrl.includes(ele) }); break
      case "POST": break
      default: res.send(exception_author.info).status(exception_author.status).end(); break
    }

    req.isPublic = isPublic

    next()
  }
}