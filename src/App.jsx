import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { AuthProvider } from './hooks/auth'

import GlobalStyles from './styles/global'

const App = () => (
  <BrowserRouter>
    <GlobalStyles/>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </BrowserRouter>
  );


export default App;
