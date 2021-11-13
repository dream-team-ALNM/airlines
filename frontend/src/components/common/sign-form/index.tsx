import ConfirmButton from './button';
import Link from '../../common/link';
import { AppRoute } from 'common/enums';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  formHeader: string;
};

const SignForm: React.FC<Props> = ({ formHeader }) => (
  <div className={getAllowedClasses(styles.signFormContainer)}>
    <p className={getAllowedClasses(styles.formName)}>{formHeader}</p>
    {formHeader === 'Sign in' ? (
      <>
        <input placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <ConfirmButton name="Confirm" to={AppRoute.ACCOUNT} />
        <div className={getAllowedClasses(styles.linkFormContainer)}>
          <Link to={AppRoute.SIGN_UP}>Sign up</Link>
        </div>
      </>
    ) : (
      <>
        <input placeholder="Full Name"></input>
        <input placeholder="Age"></input>
        <input placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <ConfirmButton name="Confirm" to={AppRoute.LOGIN} />
        <div className={getAllowedClasses(styles.linkFormContainer)}>
          <Link to={AppRoute.LOGIN}>Sign in</Link>
        </div>
      </>
    )}
  </div>
);

export default SignForm;
