import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  name: string;
  iconPath: string;
};

const Link: React.FC<Props> = ({ name, iconPath }) => (
  <div className={getAllowedClasses(styles.labelContainer)}>
    <img src={iconPath} className={getAllowedClasses(styles.labelImage)} />
    <span className={getAllowedClasses(styles.labelName)}>{name}</span>
  </div>
);

export default Link;
