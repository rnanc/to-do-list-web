import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard'


const AuthRoutes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default AuthRoutes;