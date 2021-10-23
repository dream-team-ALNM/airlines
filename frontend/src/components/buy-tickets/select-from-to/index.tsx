import Select from 'react-select';
import { IOption } from '../../../common/interfaces/components/option.interface';
import selectFromToStyles from '../select-from-to/select-from-to-styles';

type Props = {
  handleSelectChange(selectedOption: IOption | null): void;
  options: IOption[] | undefined;
  placeholder: string;
};

const SelectFromTo: React.FC<Props> = ({
  handleSelectChange,
  options,
  placeholder,
}) => (
  <Select
    className="mt-4 mb-5"
    onChange={handleSelectChange}
    options={options}
    placeholder={placeholder}
    styles={selectFromToStyles}
    isClearable
    isSearchable
    autoFocus
  />
);

export default SelectFromTo;
