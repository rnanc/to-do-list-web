import api from '../api'

export const createUser =  (user) => {
  return api.post('/users', user)
}