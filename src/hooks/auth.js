import { createContext, useCallback, useState } from 'react'
import { createSession } from '../services/sessionService'
import api from '../services/api'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const history = useHistory()
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@to-do-list:token');
    const user = localStorage.getItem('@to-do-list:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    history.push('/')
    return
  })
    

  const signIn = useCallback(async ({ email, password }) => {
    const response = await createSession({ email, password })

    const { token, user } = response.data;

    localStorage.setItem('@to-do-list:token', token);
    localStorage.setItem('@to-do-list:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@to-do-list:token');
    localStorage.removeItem('@to-do-list:user');

    setData(null);
  }, []);

  return (
    <AuthContext.Provider value={{signed: !!data , data, signIn, signOut}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
