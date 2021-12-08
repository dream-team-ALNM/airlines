/* eslint-disable no-console */
import Avatar from 'react-avatar';
import { Modal } from 'react-bootstrap';
import { Menu, Label } from 'components/common';
import accountIcon from '../../assets/img/account.png';
import turtle from '../../assets/img/turtle.png';
import { getAllowedClasses } from 'helpers';
import Route from './route';
import { useEffect, useState } from 'hooks';

import styles from './styles.module.scss';
import { AuthApi, AccountApi } from 'services';
import { IUser, IRoute, ITicketInfo } from 'common/interfaces';

const Account: React.FC = () => {
  const [age, setAge] = useState<number>(18);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [chosenRoute, setChosenRoute] = useState<string>('');
  const [ticketInfo, setTicketInfo] = useState<ITicketInfo>();

  const [showModal, setShowModal] = useState(false);

  const handleClose = (): void => setShowModal(false);
  const handleShow =
    (id: string): () => void =>
      (): void => {
        setShowModal(true);
        setChosenRoute(id);
      };

  const getUser = async (): Promise<IUser> => {
    const auth = new AuthApi();
    const user = await auth.getInfoUser(localStorage.getItem('user') || '');
    return user;
  };

  const getAccountRoutes = async (): Promise<IRoute[]> => {
    const account = new AccountApi();
    const routes = await account.getRoutes({
      id: localStorage.getItem('user') || '',
    });
    return routes;
  };

  const getTicketInfo = async (): Promise<ITicketInfo> => {
    const account = new AccountApi();
    const ticketInformation = await account.getTicketInfo({ id: chosenRoute });
    return ticketInformation;
  };

  useEffect(() => {
    getUser().then((result) => {
      if (result.age) {
        setAge(result.age);
      }
      if (result.fullName) {
        setFullName(result.fullName);
      }
      if (result.email) {
        setEmail(result.email);
      }
    });
    if (localStorage.getItem('user')) {
      getAccountRoutes().then((result) => {
        if (result) {
          setRoutes(result);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (chosenRoute) {
      getTicketInfo().then((result) => {
        if (result) {
          setTicketInfo(result);
        }
      });
    }
  }, [chosenRoute]);

  useEffect(() => {
    console.log(ticketInfo);
  }, [ticketInfo]);

  return (
    <>
      <Menu />
      <Label name="Account" iconPath={accountIcon} />
      <div className={getAllowedClasses(styles.accountContainer)}>
        <div className={getAllowedClasses(styles.accountContainerInfo)}>
          <Avatar
            className={getAllowedClasses(styles.avatar)}
            name="Wim Mostmans"
            size="100%"
            src={turtle}
          />
          <div className={getAllowedClasses(styles.typeOfUser)}>Pro user</div>
        </div>
        <div className={getAllowedClasses(styles.userInfo)}>
          <input placeholder="Full Name" readOnly value={fullName} />
          <br />
          <input placeholder="Age" readOnly value={age} />
          <br />
          <input placeholder="Email" readOnly value={email} />
        </div>
        <div className={getAllowedClasses(styles.containerList)}>
          <div className={getAllowedClasses(styles.routesList)}>
            <h3>Routes List</h3>
            {routes.map(
              ({ from, to, startDate, endDate, startTime, endTime, id }) => (
                <Route
                  key={id}
                  from={from}
                  to={to}
                  startDate={startDate}
                  endDate={endDate}
                  startTime={startTime}
                  endTime={endTime}
                  onClick={handleShow(id)}
                />
              ),
            )}
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};

export default Account;
