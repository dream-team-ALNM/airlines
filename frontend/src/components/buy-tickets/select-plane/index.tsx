import Select from 'react-select';
import { IOption } from '../../../common/interfaces/components/option.interface';
import selectPlaneStyles from './select-plane-styles';

type Props = {
  handleSelectChange(selectedOption: IOption | null): void;
  options: IOption[] | undefined;
  placeholder: string;
};

const SelectPlane: React.FC<Props> = ({
  handleSelectChange,
  options,
  placeholder,
}) => (
  <Select
    className="mt-4 mb-5"
    onChange={handleSelectChange}
    options={options}
    styles={selectPlaneStyles}
    placeholder={placeholder}
    isClearable
    isSearchable
    autoFocus
  />
);

export default SelectPlane;
