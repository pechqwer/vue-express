const withResolve = (api) => {
  return new Promise((resolve, _) => {
    api()
      .then(res => {
        resolve([null, res])
      })
      .catch(err => {
        resolve([err, null])
      })
  })
}

export default withResolve