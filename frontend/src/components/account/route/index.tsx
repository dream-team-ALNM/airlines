import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  from: string;
  to: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  onClick: () => void;
};

const RouteListItemm: React.FC<Props> = ({
  from,
  to,
  startDate,
  endDate,
  startTime,
  endTime,
  onClick,
}) => (
  <div className={getAllowedClasses(styles.routeContainer)} onClick={onClick}>
    <span
      className={getAllowedClasses(
        styles.fromTo,
        'w-100 d-flex justify-content-center',
      )}
    >
      {from} -&gt; {to}
    </span>
    <div className="w-100 d-flex justify-content-center">
      <span className={getAllowedClasses(styles.startDate)}>{startDate}</span>
      <span className={getAllowedClasses(styles.startTime)}>{startTime}</span>
      <span className={getAllowedClasses(styles.endDate)}>{endDate}</span>
      <span className={getAllowedClasses(styles.endTime)}>{endTime}</span>
    </div>
  </div>
);

export default RouteListItemm;
