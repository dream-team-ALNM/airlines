import { Menu, Label } from 'components/common';
import accountIcon from '../../assets/img/account.png';

const Account: React.FC = () => (
  <>
    <Menu />
    <Label name="Account" iconPath={accountIcon} />
    <h1>Account</h1>
  </>
);

export default Account;
