import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import airplaneSeats from '../../assets/img/airplane-seats.png';
import { IOption } from '../../common/interfaces/components/option.interface';
import SelectFromTo from './select-from-to';
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
      { value: 'Dnipro', label: 'Дніпро' },
      { value: 'Donetsk', label: 'Донецьк' },
      { value: 'Ivano-Frankivsk', label: 'Івано-Франківськ' },
      { value: 'Kyiv-Borispil', label: 'Київ-Бориспіль' },
      { value: 'Kyiv-Zhylani', label: 'Київ-Жуляни' },
      { value: 'Lviv', label: 'Львів' },
      { value: 'Odesa', label: 'Одеса' },
      { value: 'Poltava', label: 'Полтава' },
      { value: 'Chernovtsi', label: 'Черновці' },
      { value: 'Charkiv', label: 'Харків' },
      { value: 'Cherson', label: 'Херсон' },
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
        <img
          src={airplaneSeats}
          className={getAllowedClasses(
            styles.airplaneSeatsImage,
            'shadow rounded',
          )}
        />
        <div className={getAllowedClasses(styles.buyTicketsForms)}>
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
        </div>
      </div>
    </>
  );
};

export default BuyTickets;
