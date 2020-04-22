const validateInsertUser = (req, res, next) => {
  if (req.body == null) return res.status(400).end()
  if (req.body.pid == null || typeof req.body.pid !== 'string') return res.status(400).end()
  if (req.body.code == null || typeof req.body.code !== 'number') return res.status(400).end()
  next()
}

const validateDeleteUser = (req, res, next) => {
  if (req.body == null) return res.status(400).end()
  if (req.body.pid == null || typeof req.body.pid !== 'string') return res.status(400).end()
  if (req.body.code == null || typeof req.body.code !== 'number') return res.status(400).end()
  next()
}

module.exports = {
  validateInsertUser, validateDeleteUser
}