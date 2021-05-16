import React, { useContext } from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import AuthContext from '../hooks/auth'

const Routes = () => {
  const data = useContext(AuthContext)

  return data ? <AppRoutes/> : <AuthRoutes/>

}

export default Routes;