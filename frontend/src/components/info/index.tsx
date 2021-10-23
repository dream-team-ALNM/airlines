import { Menu, Label } from 'components/common';
import iconPath from '../../assets/img/logo.svg';

const Info: React.FC = () => (
  <>
    <Menu />
    <Label name="Info" iconPath={iconPath} />
    <h1>Info</h1>
  </>
);

export default Info;
