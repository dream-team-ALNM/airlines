import Link from '../../link';
import { AppRoute } from 'common/enums';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  to: AppRoute;
  name: string;
};

const ConfirmButton: React.FC<Props> = ({ to, name }) => (
  <Link to={to}>
    <div className={getAllowedClasses(styles.сonfirmButtonContainer)}>
      {name}
    </div>
  </Link>
);

export default ConfirmButton;
