import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import airplaneSeats from '../../assets/img/airplane-seats.png';
// import SelectPlane from './select-plane';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

const BuyTickets: React.FC = () => (
  <>
    <Menu />
    <Label name="Buy Tickets" iconPath={buyTicketsIcon} />
    {/* <SelectPlane /> */}
    <img
      src={airplaneSeats}
      className={getAllowedClasses(styles.airplaneSeatsImage)}
    />
  </>
);

export default BuyTickets;
