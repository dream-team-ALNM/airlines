import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  iconPath: string;
};

const MenuButton: React.FC<Props> = ({ iconPath }) => (
  <div className={getAllowedClasses(styles.menuButtonContainer)}>
    <img src={iconPath} className={getAllowedClasses(styles.menuButtonImage)} />
  </div>
);

export default MenuButton;
