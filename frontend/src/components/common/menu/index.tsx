import Button from './button';
// import accountImage from '../../../assets/img/account.png';
import infoImage from '../../../assets/img/info.png';
import loginImage from '../../../assets/img/login.png';
import airwaysImage from '../../../assets/img/airways.png';

import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

const Menu: React.FC = () => (
  <div className={getAllowedClasses(styles.menuContainer)}>
    <Button iconPath={infoImage} />
    <div className={getAllowedClasses(styles.menuNameContainer)}>
      <img src={airwaysImage} className={getAllowedClasses(styles.menuImage)} />
      <span className={getAllowedClasses(styles.menuName)}>
        Купівля авіабілетів &quot;Ukraine Airways&quot;
      </span>
    </div>

    <Button iconPath={loginImage} />
  </div>
);

export default Menu;
