import api from '../api'

export const createSession = (user) => {
  return api.post('/session', user)
}