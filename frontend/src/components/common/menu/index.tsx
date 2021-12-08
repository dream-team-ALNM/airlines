import { useHistory } from 'hooks';
import MenuLink from './link';
import Link from '../link';
import MenuButton from './button';
import { AppRoute } from 'common/enums';

import infoImage from '../../../assets/img/info.png';
import loginImage from '../../../assets/img/login.png';
import airwaysImage from '../../../assets/img/airways.png';
import accountImage from '../../../assets/img/account.png';
import buyTicketsImage from '../../../assets/img/buy-tickets.png';
import signoutImage from '../../../assets/img/signout.png';

import { getAllowedClasses } from 'helpers';
import styles from './styles.module.scss';

const Menu: React.FC = () => {
  const { push } = useHistory();
  const userValue = localStorage.getItem('user');

  const onExit = (): void => {
    localStorage.removeItem('user');
    push(AppRoute.ROOT);
  };
  return (
    <div className={getAllowedClasses(styles.menuContainer)}>
      <MenuLink iconPath={infoImage} to={AppRoute.INFO} />
      {userValue && <MenuLink iconPath={buyTicketsImage} to={AppRoute.ROOT} />}

      <Link to={AppRoute.ROOT}>
        <div className={getAllowedClasses(styles.menuNameContainer)}>
          <img
            src={airwaysImage}
            className={getAllowedClasses(styles.menuImage)}
          />

          <span className={getAllowedClasses(styles.menuName)}>
            <span>Ukraine Airways</span>
          </span>
        </div>
      </Link>
      {userValue && <MenuLink iconPath={accountImage} to={AppRoute.ACCOUNT} />}
      {userValue ? (
        <MenuButton iconPath={signoutImage} onClick={onExit} />
      ) : (
        <MenuLink iconPath={loginImage} to={AppRoute.LOGIN} />
      )}
    </div>
  );
};

export default Menu;
