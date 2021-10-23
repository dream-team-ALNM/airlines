import Select from 'react-select';
import { IOption } from '../../../common/interfaces/components/option.interface';
import selectPlaneStyles from '..//select-plane-styles';

type Props = {
  handleSelectChange(selectedOption: IOption | null): void;
  options: IOption[] | undefined;
};

const SelectPlane: React.FC<Props> = ({ handleSelectChange, options }) => (
  <Select
    className="mt-4 mb-5"
    onChange={handleSelectChange}
    options={options}
    styles={selectPlaneStyles}
    isClearable
    isSearchable
    autoFocus
  />
);

export default SelectPlane;
