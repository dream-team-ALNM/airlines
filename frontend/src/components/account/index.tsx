/* eslint-disable no-console */
import Avatar from 'react-avatar';
import { Menu, Label } from 'components/common';
import accountIcon from '../../assets/img/account.png';
import turtle from '../../assets/img/turtle.png';
import { getAllowedClasses } from 'helpers';
import Route from './route';
import { useEffect, useState } from 'hooks';

import styles from './styles.module.scss';
import { AuthApi, AccountApi } from 'services';
import { IUser, IRoute } from 'common/interfaces';

const Account: React.FC = () => {
  const [age, setAge] = useState<number>(18);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [routes, setRoutes] = useState<IRoute[]>([]);

  const getUser = async (): Promise<IUser> => {
    const auth = new AuthApi();
    const user = await auth.getInfoUser(localStorage.getItem('user') || '');
    console.log(user);
    return user;
  };

  const getAccountRoutes = async (): Promise<IRoute[]> => {
    const account = new AccountApi();
    const routes = await account.getRoutes({
      id: localStorage.getItem('user') || '',
    });
    return routes;
  };

  useEffect(() => {
    getUser().then((result) => {
      if (result.age) {
        setAge(result.age);
      }
      if (result.fullName) {
        setFullName(result.fullName);
      }
      if (result.email) {
        setEmail(result.email);
      }
      console.log(result);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      getAccountRoutes().then((result) => {
        if (result) {
          setRoutes(result);
        }
      });
    }
  }, []);

  return (
    <>
      <Menu />
      <Label name="Account" iconPath={accountIcon} />
      <div className={getAllowedClasses(styles.accountContainer)}>
        <div className={getAllowedClasses(styles.accountContainerInfo)}>
          <Avatar
            className={getAllowedClasses(styles.avatar)}
            name="Wim Mostmans"
            size="100%"
            src={turtle}
          />
          <div className={getAllowedClasses(styles.typeOfUser)}>Pro user</div>
        </div>
        <div className={getAllowedClasses(styles.userInfo)}>
          <input placeholder="Full Name" readOnly value={fullName} />
          <br />
          <input placeholder="Age" readOnly value={age} />
          <br />
          <input placeholder="Email" readOnly value={email} />
        </div>
        <div className={getAllowedClasses(styles.containerList)}>
          <div className={getAllowedClasses(styles.routesList)}>
            <h3>Routes List</h3>
            {routes.map(
              ({ from, to, startDate, endDate, startTime, endTime, id }) => (
                <Route
                  key={id}
                  from={from}
                  to={to}
                  startDate={startDate}
                  endDate={endDate}
                  startTime={startTime}
                  endTime={endTime}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
