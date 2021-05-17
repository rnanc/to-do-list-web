import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default AppRoutes;