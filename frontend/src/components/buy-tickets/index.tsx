/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import planeGif from '../../assets/img/planegif.gif';
import { IOption } from '../../common/interfaces/components/option.interface';
import Select from './select';
import PlaneSeatsGrid from './plane-seats-grid';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'hooks';
import { AirportsApi, ScheduleApi } from '../../services';
import styles from './styles.module.scss';
import { getAllowedClasses } from 'helpers';

const BuyTickets: React.FC = () => {
  //   const { username, repos, currentRepo } = useAppSelector(
  //     (state) => state.github,
  //   );
  //   const dispatch = useAppDispatch();
  const [inputDateType, setType] = useState('text');
  const [airports, setAirports] = useState<IOption[]>([]);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [startTimes, setStartTimes] = useState<IOption[]>([]);
  const [startTime, setStartTime] = useState<string>('');
  const [selectedPlace, setSelectedPlace] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');

  const onSeatClick = (seatLabel: string): void => {
    if (selectedPlace.includes(seatLabel)) {
      setSelectedPlace(
        [...selectedPlace].filter((seat: string) => seat !== seatLabel),
      );
    } else {
      setSelectedPlace([...selectedPlace, seatLabel]);
    }
  };

  const handleSelectChangeTo = (selectedOption: IOption | null): void => {
    // if (selectedOption) {
    //   dispatch(githubActions.setCurrentRepo(selectedOption.value));
    // }
    // eslint-disable-next-line no-console
    setTo(selectedOption?.value || '');
    console.log(selectedOption?.value);
  };

  const handleSelectChangeFrom = (selectedOption: IOption | null): void => {
    // if (selectedOption) {
    //   dispatch(githubActions.setCurrentRepo(selectedOption.value));
    // }
    // eslint-disable-next-line no-console
    setFrom(selectedOption?.value || '');
    console.log(selectedOption?.value);
  };

  const handleSelectChangeTime = (selectedOption: IOption | null): void => {
    setStartTime(selectedOption?.value || '');
    // eslint-disable-next-line no-console
    console.log(selectedOption?.value);
  };

  const getOptionsTime = async (): Promise<IOption[] | undefined> => {
    const schedule = new ScheduleApi();
    const allTimes = await schedule.getTimes({ from, to, startDate });
    const result: Array<any> = [];
    allTimes.forEach(async (time) => {
      result.push({
        value: time.id,
        label: time.value,
      });
    });
    return result;
  };

  const getOptions = async (): Promise<IOption[] | undefined> => {
    const airports = new AirportsApi();
    const allAirports = await airports.getAirports();
    const result: Array<any> = [];
    allAirports.forEach(async (airport) => {
      result.push({
        value: airport._id,
        label: airport.name,
      });
    });
    console.log(allAirports);
    return result;
  };

  useEffect(() => {
    getOptions().then((result) => result && setAirports(result));
  }, []);

  useEffect(() => {
    if (from && to && startDate) {
      getOptionsTime().then((result) => result && setStartTimes(result));
    }
  }, [from, to, startDate]);

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    setStartDate(value);
  };

  return (
    <>
      <Menu />
      <Label name="Купівля авіаквитків" iconPath={buyTicketsIcon} />
      <div className={getAllowedClasses(styles.buyTicketsContainer)}>
        {from && to && startTime ? (
          <div
            className={getAllowedClasses(
              styles.buyTicketsPlaneSchema,
              'shadow',
            )}
          >
            <PlaneSeatsGrid
              seatsCount={78}
              onSeatClick={onSeatClick}
              selected={selectedPlace}
            />
          </div>
        ) : (
          <img
            src={planeGif}
            className={getAllowedClasses(styles.menuImage, 'shadow')}
          />
        )}
        <div className={getAllowedClasses(styles.buyTicketsForms)}>
          <Select
            options={airports}
            handleSelectChange={handleSelectChangeFrom}
            placeholder="From"
          />
          <Select
            options={airports.filter((airport) => airport.value != from)}
            handleSelectChange={handleSelectChangeTo}
            placeholder="To"
          />
          <input
            type={inputDateType}
            onFocus={(): void => setType('date')}
            onBlur={(): void => setType('text')}
            onChange={handleDateChange}
            placeholder="Start Date"
            lang="en-US"
            min={new Date().toISOString().slice(0, 10)}
          />
          <Select
            options={startTimes}
            handleSelectChange={handleSelectChangeTime}
            placeholder="Start time"
          />
          <div className={getAllowedClasses(styles.endDateField)}>End Date</div>
          <div className={getAllowedClasses(styles.endDateField)}>End time</div>
          <div className={getAllowedClasses(styles.priceField)}>
            {selectedPlace.length || 'Price'}
          </div>
          <input placeholder="Full Name" />
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
