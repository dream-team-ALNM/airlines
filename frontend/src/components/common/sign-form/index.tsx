import React from 'react';
import ConfirmButton from './button';
import Link from '../../common/link';
import { AppRoute } from 'common/enums';
import { ILoginUser, IUser } from '../../../common/interfaces/user';
import { useFormFields } from '../../../hooks';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  formHeader: string;
};

const SignForm: React.FC<Props> = ({ formHeader }) => {
  const [inputs, handleInputChange] =
    formHeader === 'Sign in'
      ? useFormFields<ILoginUser>({ email: '', password: '' })
      : useFormFields<IUser>({ fullName: '', age: 0, email: '', password: '' });

  const handleSubmitForm = (): void => {
    // eslint-disable-next-line no-console
    console.log(inputs);
  };

  return (
    <div className={getAllowedClasses(styles.signFormContainer)}>
      <p className={getAllowedClasses(styles.formName)}>{formHeader}</p>
      {formHeader === 'Sign in' ? (
        <>
          <input
            placeholder="Email"
            name="email"
            type="string"
            value={inputs.email}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputChange}
          ></input>
          <ConfirmButton name="Confirm" onClick={handleSubmitForm} />
          <div className={getAllowedClasses(styles.linkFormContainer)}>
            <Link to={AppRoute.SIGN_UP}>Sign up</Link>
          </div>
        </>
      ) : (
        <>
          <input
            placeholder="Full Name"
            name="full_name"
            type="string"
            value={inputs.full_name}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Age"
            name="age"
            type="number"
            value={inputs.age}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Email"
            name="email"
            type="string"
            value={inputs.email}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputChange}
          ></input>
          <ConfirmButton name="Confirm" onClick={handleSubmitForm} />
          <div className={getAllowedClasses(styles.linkFormContainer)}>
            <Link to={AppRoute.LOGIN}>Sign in</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SignForm;
