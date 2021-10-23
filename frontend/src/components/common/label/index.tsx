type Props = {
  name: string;
  iconPath: string;
};

const Link: React.FC<Props> = ({ name, iconPath }) => (
  <div>
    <img src={iconPath} />
    <span>{name}</span>
  </div>
);

export default Link;
