/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { toast } from 'react-toastify';
import ConfirmButton from './button';
import Link from '../common/link';
import { AppRoute } from 'common/enums';
import { ISignupError, IUser } from '../../common/interfaces';
import { useFormFields, useHistory, useEffect, useState } from '../../hooks';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';
import { AuthApi } from 'services';
import { HttpError } from 'exceptions';
import {
  validEmail,
  validPassword,
  validFullName,
  validAge,
} from 'common/constants';

type Props = {
  formHeader: string;
};

const Signup: React.FC<Props> = ({ formHeader }) => {
  const [inputAgeType, setType] = useState('text');
  const { push } = useHistory();
  const [inputs, setInputs] = useFormFields<IUser>({
    fullName: '',
    age: 0,
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<ISignupError>({
    fullNameError: '',
    ageError: '',
    emailError: '',
    passwordError: '',
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

  useEffect(() => {
    console.log(validAge.test(inputs.age));
    console.log(validPassword.test(inputs.password));
    console.log(validFullName.test(inputs.fullname));
    console.log(validEmail.test(inputs.email));

    setErrors((prevState: ISignupError) => ({
      ...prevState,
      emailError:
        inputs.email && !validEmail.test(inputs.email)
          ? 'Імейл: містить знак @ та поштовий сервер'
          : '',
      passwordError:
        inputs.password && !validPassword.test(inputs.password)
          ? 'Пароль: 6-12 символів, латинські великі/малі літери, числа та символи'
          : '',
      fullNameError:
        inputs.fullname && !validFullName.test(inputs.fullname)
          ? "Повне ім'я: 2 слова латиницею/кирилицею, 1-15 символів на слово, перша літера слова - велика"
          : '',
      ageError:
        inputs.age && !validAge.test(inputs.age)
          ? 'Вік: ціле число від 18 до 100'
          : '',
    }));
  }, [inputs]);

  return (
    <div className={getAllowedClasses(styles.signFormContainer)}>
      <p className={getAllowedClasses(styles.formName)}>{formHeader}</p>
      <>
        <input
          placeholder="*Full Name"
          name="fullName"
          type="string"
          value={inputs.fullName}
          onChange={setInputs}
        ></input>
        <p className={getAllowedClasses(styles.error)}>
          {errors.fullNameError}
        </p>
        <input
          placeholder="*Age"
          name="age"
          type={inputAgeType}
          onFocus={(): void => setType('number')}
          onBlur={(): void => setType('text')}
          onChange={setInputs}
          min="1"
          max="100"
        ></input>
        <p className={getAllowedClasses(styles.error)}>{errors.ageError}</p>
        <input
          placeholder="*Email"
          name="email"
          type="string"
          value={inputs.email}
          onChange={setInputs}
        ></input>
        <p className={getAllowedClasses(styles.error)}>{errors.emailError}</p>
        <input
          placeholder="*Password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={setInputs}
        ></input>
        <p className={getAllowedClasses(styles.error)}>
          {errors.passwordError}
        </p>
        <ConfirmButton name="Confirm" onClick={handleSubmitForm} />
        <div className={getAllowedClasses(styles.linkFormContainer)}>
          <Link to={AppRoute.LOGIN}>Sign in</Link>
        </div>
      </>
    </div>
  );
};

export default Signup;
