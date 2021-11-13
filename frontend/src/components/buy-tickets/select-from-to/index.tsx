import useWindowDimensions from 'hooks/window-dimensions.hook';
import Select from 'react-select';
import { IOption } from '../../../common/interfaces/components/option.interface';
import getSelectFromToStyles from '../select-from-to/select-from-to-styles';

type Props = {
  handleSelectChange(selectedOption: IOption | null): void;
  options: IOption[] | undefined;
  placeholder: string;
};

const SelectFromTo: React.FC<Props> = ({
  handleSelectChange,
  options,
  placeholder,
}) => {
  const { width } = useWindowDimensions();
  const selectWidth = width > 850 ? '17vw' : width > 600 ? '50vw' : '80vw';
  const selectHeight = width > 850 ? '2.2vw' : width > 600 ? '4vw' : '6vw';
  const selectFontSize = width > 850 ? '1.25vw' : width > 600 ? '2vw' : '3vw';
  return (
    <Select
      onChange={handleSelectChange}
      options={options}
      placeholder={placeholder}
      styles={getSelectFromToStyles(selectWidth, selectHeight, selectFontSize)}
      isClearable
      isSearchable
      autoFocus
    />
  );
};

export default SelectFromTo;
