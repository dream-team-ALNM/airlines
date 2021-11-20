import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import { IOption } from '../../common/interfaces/components/option.interface';
import Select from './select';
import PlaneSeatsGrid from './plane-seats-grid';
import Button from 'react-bootstrap/Button';
import { useState } from 'hooks';
import { getAllowedClasses } from 'helpers';
import styles from './styles.module.scss';

const BuyTickets: React.FC = () => {
  //   const { username, repos, currentRepo } = useAppSelector(
  //     (state) => state.github,
  //   );
  //   const dispatch = useAppDispatch();
  const [inputDateType, setType] = useState('text');
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

  const getTimeOptions = (): IOption[] | undefined => {
    return [{ value: '22-00', label: '22-00' }];
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
      <Label name="Купівля авіаквитків" iconPath={buyTicketsIcon} />
      <div className={getAllowedClasses(styles.buyTicketsContainer)}>
        <div className={getAllowedClasses(styles.buyTicketsPlaneSchema)}>
          <PlaneSeatsGrid seatsCount={78} />
        </div>
        <div className={getAllowedClasses(styles.buyTicketsForms)}>
          <Select
            options={getOptions()}
            handleSelectChange={handleSelectChange}
            placeholder="From"
          />
          <Select
            options={getOptions()}
            handleSelectChange={handleSelectChange}
            placeholder="To"
          />
          <input placeholder="Full Name" />
          <input
            type={inputDateType}
            onFocus={(): void => setType('date')}
            onBlur={(): void => setType('text')}
            placeholder="Start Date"
            lang="en-US"
          />
          <Select
            options={getTimeOptions()}
            handleSelectChange={handleSelectChange}
            placeholder="Start time"
          />
          <div className={getAllowedClasses(styles.endDateField)}>End Date</div>
          <div className={getAllowedClasses(styles.endDateField)}>End time</div>
          <div className={getAllowedClasses(styles.priceField)}>Price</div>
          <div className={getAllowedClasses(styles.buttonContainer)}>
            <Button variant="success">buy</Button>
          </div>
        </div>
      </div>
      <p className={getAllowedClasses('px-4')}>
        За допомогою нашого сайту ви легко зможете купити квитки Ukraine
        Airways. Наші літаки літають за всіма найпопулярнішими напрямками,
        такими як, Дніпро Київ, Львів Київ, Харків Київ. Тож, бажаючі придбати
        квитки на літак по Україні, звернутися до нас - найкращий варінт. Ви
        можете <strong>придбати авіаквитки по Україні</strong> за пару кліків.
      </p>
    </>
  );
};

export default BuyTickets;
