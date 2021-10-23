import { Menu, Label } from 'components/common';
import iconPath from '../../assets/img/account.png';

const Account: React.FC = () => (
  <>
    <Menu />
    <Label name="Account" iconPath={iconPath} />
    <h1>Account</h1>
  </>
);

export default Account;
