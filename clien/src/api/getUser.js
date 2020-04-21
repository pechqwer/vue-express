import axios from 'axios'
import withResolve from '../js/withResolve'

const link = '/api/user'
const getUser = async (pid = null) => {
  const api = () => { return axios.get(`${link}${pid !== null ? `/${pid}` : ''}`) }
  const [err, result] = await withResolve(api)
  if (err) return err.response
  return result.data
}

export default getUser
