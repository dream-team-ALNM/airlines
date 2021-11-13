import { AppRoute } from '../../common/enums';
import { Switch, Route } from 'react-router-dom';
import Info from 'components/info';
import Account from 'components/account';
import BuyTickets from 'components/buy-tickets';
import Login from 'components/login';
import SignUp from 'components/sign-up';
import NotFound from 'components/not-found';

const App: React.FC = () => {
  localStorage.setItem('user', 'sdkgksg'); //
  return (
    <Switch>
      <Route path={AppRoute.LOGIN} component={Login} exact />
      <Route path={AppRoute.INFO} component={Info} exact />
      <Route path={AppRoute.ACCOUNT} component={Account} exact />
      <Route path={AppRoute.SIGN_UP} component={SignUp} exact />
      <Route path={AppRoute.ROOT} component={BuyTickets} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
