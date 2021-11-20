/* eslint-disable @typescript-eslint/no-explicit-any */

export default (
  containerWidth: string,
  selectHeight: string,
  selectFontSize: string,
): any => ({
  option: (provided: any): any => ({
    ...provided,
    fontSize: selectFontSize,
    padding: '0.2rem',
    height: selectHeight,
  }),

  control: (provided: any): any => ({
    ...provided,
    background: '#E8EBED',
    minHeight: '20px',
    fontSize: selectFontSize,
    height: selectHeight,
    borderRadius: '0',
    alignItems: 'flex-start',
    fontFamily:
      // eslint-disable-next-line @typescript-eslint/quotes
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  }),

  container: (provided: any): any => ({
    ...provided,
    marginBottom: '0px !important',
    width: containerWidth,
  }),

  valueContainer: (provided: any): any => ({
    ...provided,
    height: selectHeight,
    padding: '0 6px',
  }),

  input: (provided: any): any => ({
    ...provided,
    margin: '0px',
  }),

  dropdownIndicator: (provided: any): any => ({
    ...provided,
    padding: '0px',
    paddingLeft: '8px',
  }),

  indicatorSeparator: (provided: any): any => ({
    ...provided,
    width: '0px',
  }),

  indicatorsContainer: (provided: any): any => ({
    ...provided,
    height: selectHeight,
    alignItems: 'flex-start',
    padding: '3px',
  }),

  clearIndicator: (provided: any): any => ({
    ...provided,
    padding: '0px',
  }),

  noOptionsMessage: (provided: any): any => ({
    ...provided,
    height: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
});
