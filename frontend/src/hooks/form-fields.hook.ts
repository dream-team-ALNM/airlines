import { useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useFormFields<T>(initialState: T): any {
  const [inputs, setValues] = useState(initialState);

  return [
    inputs,
    function (event: React.ChangeEvent<HTMLInputElement>): any {
      const { name, value, validationMessage } = event.target;
      // eslint-disable-next-line no-console
      console.log(validationMessage);
      setValues({
        ...inputs,
        [name]: value,
        [`${name}Error`]: validationMessage,
      });
    },
  ];
}
