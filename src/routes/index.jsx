import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

const Routes = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;