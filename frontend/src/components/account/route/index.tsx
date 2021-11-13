import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  from: string;
  to: string;
  startDate: string;
  endDate: string;
};

const RouteListItemm: React.FC<Props> = ({ from, to, startDate, endDate }) => (
  <div className={getAllowedClasses(styles.routeContainer)}>
    <span className={getAllowedClasses(styles.fromTo)}>
      {from} -&gt; {to}
    </span>
    <span className={getAllowedClasses(styles.startDate)}>{startDate}</span>
    <span className={getAllowedClasses(styles.endDate)}>{endDate}</span>
  </div>
);

export default RouteListItemm;
