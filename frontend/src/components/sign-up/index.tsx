/* eslint-disable no-console */
import React from 'react';
import { toast } from 'react-toastify';
import ConfirmButton from './button';
import Link from '../common/link';
import { AppRoute, ErrorMessage } from 'common/enums';
import { ISignupError, IUser } from '../../common/interfaces';
import { useFormFields, useHistory, useState } from '../../hooks';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';
import { AuthApi } from 'services';
import { HttpError } from 'exceptions';
import {
  validEmail,
  validPassword,
  validFullName,
} from 'common/constants';

const Signup: React.FC = () => {
  const [inputAgeType, setType] = useState('text');
  const { push } = useHistory();
  const [inputs, setInputs] = useFormFields<IUser & ISignupError>({
    fullName: '',
    age: 0,
    email: '',
    password: '',
    fullNameError: '',
    ageError: '',
    passwordError: '',
    emailError: '',
  });

  const handleSubmitForm = async (): Promise<void> => {
    try {
      const user = await new AuthApi().registerUser(inputs as IUser);
      localStorage.setItem('user', user.id || '');
      push(AppRoute.ROOT);
    } catch (e) {
      toast.error((e as HttpError).message);
    }
  };

  return (
    <div className={getAllowedClasses(styles.signFormContainer)}>
      <div className={getAllowedClasses(styles.signForm)}>
        <p className={getAllowedClasses(styles.formName)}>Sign up</p>
        <div className={getAllowedClasses(styles.signFields)}>
          <div className={getAllowedClasses(styles.signField)}>
            <input
              placeholder="*Full Name"
              name="fullName"
              type="string"
              value={inputs.fullName}
              onChange={setInputs}
              pattern={validFullName.toString().slice(1, -3)}
            ></input>
            <p className={getAllowedClasses(styles.error)}>
              {inputs.fullNameError ? ErrorMessage.FULLNAME : ''}
            </p>
          </div>
          <div className={getAllowedClasses(styles.signField)}>
            <input
              placeholder="*Age"
              name="age"
              type={inputAgeType}
              onFocus={(): void => setType('number')}
              onBlur={(): void => setType('text')}
              onChange={setInputs}
              min="18"
              max="100"
            ></input>
            <p className={getAllowedClasses(styles.error)}>
              {inputs.ageError ? ErrorMessage.AGE : ''}
            </p>
          </div>
          <div className={getAllowedClasses(styles.signField)}>
            <input
              placeholder="*Email"
              name="email"
              type="string"
              value={inputs.email}
              onChange={setInputs}
              pattern={validEmail.toString().slice(1, -3)}
            ></input>
            <p className={getAllowedClasses(styles.error)}>
              {inputs.emailError ? ErrorMessage.EMAIL : ''}
            </p>
          </div>
          <div className={getAllowedClasses(styles.signField)}>
            <input
              placeholder="*Password"
              name="password"
              type="password"
              value={inputs.password}
              onChange={setInputs}
              pattern={validPassword.toString().slice(1, -3)}
            ></input>
            <p className={getAllowedClasses(styles.error)}>
              {inputs.passwordError ? ErrorMessage.PASSWORD : ''}
            </p>
          </div>
          <div className={getAllowedClasses(styles.signFields)}>
            <ConfirmButton name="Confirm" onClick={handleSubmitForm} />
            <div className={getAllowedClasses(styles.linkFormContainer)}>
              <Link to={AppRoute.LOGIN}>Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
