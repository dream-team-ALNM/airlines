import Button from './button';
import Link from '../link';
// import accountImage from '../../../assets/img/account.png';
import { AppRoute } from 'common/enums';

import infoImage from '../../../assets/img/info.png';
import loginImage from '../../../assets/img/login.png';
import airwaysImage from '../../../assets/img/airways.png';

import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

const Menu: React.FC = () => (
  <div className={getAllowedClasses(styles.menuContainer)}>
    <Button iconPath={infoImage} to={AppRoute.INFO} />
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

    <Button iconPath={loginImage} to={AppRoute.LOGIN} />
  </div>
);

export default Menu;
