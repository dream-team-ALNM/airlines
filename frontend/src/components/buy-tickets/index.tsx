/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import { IOption } from '../../common/interfaces/components/option.interface';
import SelectFromTo from './select-from-to';
import SelectPlane from './select-plane';
import PlaneSeatsGrid from './plane-seats-grid';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'hooks';
import { Airports } from '../../services';
import * as helpers from 'helpers';
import styles from './styles.module.scss';

const BuyTickets: React.FC = () => {
  //   const { username, repos, currentRepo } = useAppSelector(
  //     (state) => state.github,
  //   );
  //   const dispatch = useAppDispatch();
  const [inputDateType, setType] = useState('text');
  const [airports, setAirports] = useState<IOption[]>([]);
  const handleSelectChange = (selectedOption: IOption | null): void => {
    // if (selectedOption) {
    //   dispatch(githubActions.setCurrentRepo(selectedOption.value));
    // }
    // eslint-disable-next-line no-console
    console.log(selectedOption?.value);
  };

  const getOptions = async (): Promise<IOption[] | undefined> => {
    const airports = new Airports();
    const allAirports = await airports.getAirports();
    const result: Array<any> = [];
    allAirports.forEach(async (airport) => {
      result.push({
        value: airport._id,
        label: airport.name,
      });
    });
    return result;
  };
  useEffect(() => {
    getOptions().then((result) => result && setAirports(result));
  }, []);

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
      <Label name="Купівля авіаквитків" iconPath={buyTicketsIcon} />
      <div className={helpers.getAllowedClasses(styles.buyTicketsContainer)}>
        <div
          className={helpers.getAllowedClasses(styles.buyTicketsPlaneSchema)}
        >
          <PlaneSeatsGrid seatsCount={78} />
        </div>
        <div className={helpers.getAllowedClasses(styles.buyTicketsForms)}>
          <SelectPlane
            options={getOptionsPlane()}
            handleSelectChange={handleSelectChange}
            placeholder="Plane type"
          />
          <SelectFromTo
            options={airports}
            handleSelectChange={handleSelectChange}
            placeholder="From"
          />
          <SelectFromTo
            options={airports}
            handleSelectChange={handleSelectChange}
            placeholder="To"
          />
          <input placeholder="Full Name" />
          <input
            type={inputDateType}
            onFocus={(): void => setType('date')}
            onBlur={(): void => setType('text')}
            placeholder="Start Date&amp;Time"
            lang="en-US"
          />
          <div className={helpers.getAllowedClasses(styles.endDateField)}>
            End Date&amp;Time
          </div>
          <div className={helpers.getAllowedClasses(styles.priceField)}>
            Price
          </div>
          <div className={helpers.getAllowedClasses(styles.buttonContainer)}>
            <Button variant="success">buy</Button>
          </div>
        </div>
      </div>
      <p className={helpers.getAllowedClasses('px-4')}>
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
