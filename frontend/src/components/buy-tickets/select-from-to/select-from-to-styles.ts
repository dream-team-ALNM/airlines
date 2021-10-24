/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
  option: (provided: any): any => ({
    ...provided,
    fontSize: '1.25rem',
    padding: '0.2rem',
  }),

  control: (provided: any): any => ({
    ...provided,
    background: '#E8EBED',
    minHeight: '30px',
    height: '30px',
    width: 260,
    borderRadius: '0',
    fontFamily:
      // eslint-disable-next-line @typescript-eslint/quotes
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: 20,
    paddingBottom: '2rem',
  }),

  container: (provided: any): any => ({
    ...provided,
    marginBottom: '0px !important',
  }),

  valueContainer: (provided: any): any => ({
    ...provided,
    height: '30px',
    padding: '0 6px',
  }),

  input: (provided: any): any => ({
    ...provided,
    margin: '0px',
  }),

  indicatorsContainer: (provided: any): any => ({
    ...provided,
    height: '30px',
  }),

  noOptionsMessage: (provided: any): any => ({
    ...provided,
    height: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
};
