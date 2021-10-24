import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import airplaneSeats from '../../assets/img/airplane-seats.png';
import airplaneSeatsMobile from '../../assets/img/airplane-seats-mobile.png';
import { IOption } from '../../common/interfaces/components/option.interface';
import SelectFromTo from './select-from-to';
import SelectPlane from './select-plane';
import Button from 'react-bootstrap/Button';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

const BuyTickets: React.FC = () => {
  //   const { username, repos, currentRepo } = useAppSelector(
  //     (state) => state.github,
  //   );
  //   const dispatch = useAppDispatch();
  const handleSelectChange = (selectedOption: IOption | null): void => {
    // if (selectedOption) {
    //   dispatch(githubActions.setCurrentRepo(selectedOption.value));
    // }
    // eslint-disable-next-line no-console
    console.log(selectedOption?.value);
  };

  const getOptions = (): IOption[] | undefined => {
    return [
      { value: 'dnipro', label: 'Дніпро' },
      { value: 'donetsk', label: 'Донецьк' },
      { value: 'ivanoFrankivsk', label: 'Івано-Франківськ' },
      { value: 'kyivBorispil', label: 'Київ-Бориспіль' },
      { value: 'kyivZhylani', label: 'Київ-Жуляни' },
      { value: 'lviv', label: 'Львів' },
      { value: 'odesa', label: 'Одеса' },
      { value: 'poltava', label: 'Полтава' },
      { value: 'chernovtsi', label: 'Черновці' },
      { value: 'charkiv', label: 'Харків' },
      { value: 'cherson', label: 'Херсон' },
    ];
    // if (!repos) {
    //   return;
    // }
    // return repos.map((repo) => ({
    //   value: repo,
    //   label: repo,
    // }));
  };
  const getOptionsPlane = (): IOption[] | undefined => {
    return [
      { value: 'plane34RR', label: 'Plane-34RR' },
      { value: 'plane55NN', label: 'Plane-55NN' },
      { value: 'plane90ER', label: 'Plane-90ER' },
      { value: 'plane23XX', label: 'Plane-23XX' },
    ];
    // if (!repos) {
    //   return;
    // }
    // return repos.map((repo) => ({
    //   value: repo,
    //   label: repo,
    // }));
  };

  return (
    <>
      <Menu />
      <Label name="Buy Tickets" iconPath={buyTicketsIcon} />
      <div className={getAllowedClasses(styles.buyTicketsContainer)}>
        <picture>
          <source media="(max-width: 599px)" srcSet={airplaneSeatsMobile} />
          <source media="(min-width: 600px)" srcSet={airplaneSeats} />
          <img
            src={airplaneSeats}
            alt="Plane schema"
            className={getAllowedClasses(
              styles.airplaneSeatsImage,
              'shadow rounded',
            )}
          />
        </picture>
        <div className={getAllowedClasses(styles.buyTicketsForms)}>
          <SelectPlane
            options={getOptionsPlane()}
            handleSelectChange={handleSelectChange}
            placeholder="Plane type"
          />
          <SelectFromTo
            options={getOptions()}
            handleSelectChange={handleSelectChange}
            placeholder="From"
          />
          <SelectFromTo
            options={getOptions()}
            handleSelectChange={handleSelectChange}
            placeholder="To"
          />
          <input placeholder="Full Name" />
          <br />
          <input placeholder="Start Date&amp;Time" />
          <br />
          <input placeholder="End Date&amp;Time" />
          <div>Price</div>
          <Button variant="success">buy</Button>
        </div>
      </div>
    </>
  );
};

export default BuyTickets;
