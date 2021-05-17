import React, { useContext } from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import AuthContext from '../hooks/auth'

const Routes = () => {
  const { signed } = useContext(AuthContext)

  return signed ? <AuthRoutes/> : <AppRoutes/>

}

export default Routes;