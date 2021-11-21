/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { toast } from 'react-toastify';
import ConfirmButton from './button';
import Link from '../common/link';
import { AppRoute } from 'common/enums';
import { ILoginUser, ILoginError } from '../../common/interfaces';
import { useFormFields, useHistory, useEffect, useState } from '../../hooks';
import { getAllowedClasses } from 'helpers';
import { AuthApi } from 'services';
import { HttpError } from 'exceptions';
import { validEmail } from 'common/constants';

import styles from './styles.module.scss';

const Login: React.FC = () => {
  const { push } = useHistory();
  const [inputs, setInputs] = useFormFields<ILoginUser>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<ILoginError>({ emailError: '' });

  const handleSubmitForm = async (): Promise<void> => {
    try {
      const user = await new AuthApi().loginUser(inputs as ILoginUser);
      localStorage.setItem('user', user.id || '');
      push(AppRoute.ROOT);
    } catch (e) {
      toast.error((e as HttpError).message);
    }
  };

  useEffect(() => {
    setErrors((prevState: ILoginError) => ({
      ...prevState,
      emailError:
        inputs.email && !validEmail.test(inputs.email)
          ? 'Імейл: містить знак @ та поштовий сервер'
          : '',
    }));
  }, [inputs]);

  return (
    <div className={getAllowedClasses(styles.signFormContainer)}>
      <div className={getAllowedClasses(styles.signForm)}>
        <p className={getAllowedClasses(styles.formName)}>Log in</p>
        <div className={getAllowedClasses(styles.signFields)}>
          <div className={getAllowedClasses(styles.signField)}>
            <input
              placeholder="Email"
              name="email"
              type="string"
              value={inputs.email}
              onChange={setInputs}
            ></input>
            <p className={getAllowedClasses(styles.error)}>
              {errors.emailError}
            </p>
          </div>
          <div className={getAllowedClasses(styles.signField)}>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={inputs.password}
              onChange={setInputs}
            ></input>
          </div>
        </div>
        <div className={getAllowedClasses(styles.signFields)}>
          <ConfirmButton name="Confirm" onClick={handleSubmitForm} />
          <div className={getAllowedClasses(styles.linkFormContainer)}>
            <Link to={AppRoute.SIGN_UP}>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
