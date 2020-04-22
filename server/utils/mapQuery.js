const mapQueryUser = (query) => {
  const arr = Object.keys(query)
  const filter = arr.map(x => ['pid', 'name', 'code'].includes(x)).filter(x => !x)
  if (filter.length > 0) return false
  return true
}

module.exports = {
  mapQueryUser
}