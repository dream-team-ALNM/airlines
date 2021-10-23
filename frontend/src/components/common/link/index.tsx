import { NavLink as AppLink } from 'react-router-dom';
import { AppRoute } from '../../../common/enums';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  to: AppRoute;
};

const Link: React.FC<Props> = ({ children, to }) => (
  <AppLink to={to} className={getAllowedClasses(styles.link)}>{children}</AppLink>
);

export default Link;
