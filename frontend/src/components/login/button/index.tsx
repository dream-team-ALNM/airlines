import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
  name: string;
};

const ConfirmButton: React.FC<Props> = ({ onClick, name }) => (
  <div
    className={getAllowedClasses(styles.сonfirmButtonContainer)}
    onClick={onClick}
  >
    {name}
  </div>
);

export default ConfirmButton;
