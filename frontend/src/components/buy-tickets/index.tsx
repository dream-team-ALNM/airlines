import { Menu, Label } from 'components/common';
import iconPath from '../../assets/img/buy-tickets.png';

const BuyTickets: React.FC = () => (
  <>
    <Menu />
    <Label name="Buy Tickets" iconPath={iconPath} />
    <h1>BuyTickets</h1>
  </>
);

export default BuyTickets;
