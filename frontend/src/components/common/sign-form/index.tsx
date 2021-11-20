import React from 'react';
import { toast } from 'react-toastify';
import ConfirmButton from './button';
import Link from '../../common/link';
import { AppRoute } from 'common/enums';
import { ILoginUser, IUser } from '../../../common/interfaces/user';
import { useFormFields, useHistory } from '../../../hooks';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';
import { AuthApi } from 'services';
import { HttpError } from 'exceptions';

type Props = {
  formHeader: string;
};

const SignForm: React.FC<Props> = ({ formHeader }) => {
  const { push } = useHistory();
  const [inputs, handleInputChange] =
    formHeader === 'Sign in'
      ? useFormFields<ILoginUser>({ email: '', password: '' })
      : useFormFields<IUser>({ fullName: '', age: 0, email: '', password: '' });

  const handleSubmitForm = async (): Promise<void> => {
    try {
      const user =
        formHeader === 'Sign in'
          ? await new AuthApi().loginUser(inputs as ILoginUser)
          : await new AuthApi().registerUser(inputs as IUser);
      localStorage.setItem('user', user.id || '');
      push(AppRoute.ROOT);
    } catch (e) {
      toast.error((e as HttpError).message);
    }
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
            name="fullName"
            type="string"
            value={inputs.fullName}
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
