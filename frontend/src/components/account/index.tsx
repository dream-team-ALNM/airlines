import Avatar from 'react-avatar';
import { Menu, Label } from 'components/common';
import accountIcon from '../../assets/img/account.png';
import turtle from '../../assets/img/turtle.png';
import { getAllowedClasses } from 'helpers';
import Route from './route';

import styles from './styles.module.scss';

const Account: React.FC = () => (
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
        <input placeholder="Full Name" />
        <br />
        <input placeholder="Age" />
        <br />
        <input placeholder="Email" />
      </div>
      <div className={getAllowedClasses(styles.containerList)}>
        <div className={getAllowedClasses(styles.routesList)}>
          <h3>Routes List</h3>
          <Route
            from="Бориспіль"
            to="Жуляни"
            startDate="11.09.21"
            endDate="12.09.21"
          />
          <Route
            from="Бориспіль"
            to="Жуляни"
            startDate="11.09.21"
            endDate="12.09.21"
          />
        </div>
      </div>
    </div>
  </>
);

export default Account;
