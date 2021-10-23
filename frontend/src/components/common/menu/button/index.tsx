import Link from '../../link';
import { AppRoute } from 'common/enums';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  iconPath: string;
  to: AppRoute;
};

const MenuButton: React.FC<Props> = ({ iconPath, to }) => (
  <Link to={to}>
    <div className={getAllowedClasses(styles.menuButtonContainer)}>
      <img
        src={iconPath}
        className={getAllowedClasses(styles.menuButtonImage)}
      />
    </div>
  </Link>
);

export default MenuButton;
