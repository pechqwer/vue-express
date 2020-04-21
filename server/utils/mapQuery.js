const mapFieldUser = (query) => {
  const arr = Object.keys(query)
  const filter = arr.map(x => ['pid', 'name', 'code'].includes(x)).filter(x => x === false)
  if (filter.length > 0) return false
  return true
}

module.exports = {
  mapFieldUser
}