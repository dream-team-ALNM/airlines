import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  iconPath: string;
  onClick: () => void;
};

const MenuButton: React.FC<Props> = ({ iconPath, onClick }) => (
  <div
    className={getAllowedClasses(styles.menuButtonContainer)}
    onClick={onClick}
  >
    <img src={iconPath} className={getAllowedClasses(styles.menuButtonImage)} />
  </div>
);

export default MenuButton;
