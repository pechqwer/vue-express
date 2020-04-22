const mapFieldUser = (body) => {
  return {
    pid: body.pid,
    code: body.code
  }
}

const mapTypeofUser = (body) => {
  const newBody = {}
  if (body.pid != null) newBody.pid = body.pid.toString()
  if (body.code != null) newBody.code = Number(body.code)

  return newBody
}

module.exports = {
  mapFieldUser, mapTypeofUser
}