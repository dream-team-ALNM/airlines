import { Menu, Label } from 'components/common';
import iconPath from '../../assets/img/info.png';

const Info: React.FC = () => (
  <>
    <Menu />
    <Label name="Company Info" iconPath={iconPath} />
    <h1>Info</h1>
  </>
);

export default Info;
