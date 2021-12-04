/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import airwaysImage from '../../assets/img/airways.png';
import { IOption } from '../../common/interfaces/components/option.interface';
import Select from './select';
import PlaneSeatsGrid from './plane-seats-grid';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'hooks';
import { AirportsApi, TicketApi } from '../../services';
import styles from './styles.module.scss';
import { getAllowedClasses } from 'helpers';

const BuyTickets: React.FC = () => {
  const [inputDateType, setType] = useState('text');
  const [airports, setAirports] = useState<IOption[]>([]);
  const [occupiedPlaces, setOccupiedPlaces] = useState<string[]>([]);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [selectedPlace, setSelectedPlace] = useState<string[]>([]);

  const onSeatClick = (seatLabel: string): void => {
    if (selectedPlace.includes(seatLabel)) {
      setSelectedPlace(
        [...selectedPlace].filter((seat: string) => seat !== seatLabel),
      );
    } else {
      if (!occupiedPlaces.includes(seatLabel)) {
        setSelectedPlace([...selectedPlace, seatLabel]);
      }
    }
  };

  const handleSelectChangeTo = (selectedOption: IOption | null): void => {
    setTo(selectedOption?.value || '');
  };

  const handleSelectChangeFrom = (selectedOption: IOption | null): void => {
    setFrom(selectedOption?.value || '');
  };

  const handleSelectChangeDate = (selectedOption: IOption | null): void => {
    setStartTime(selectedOption?.value || '');
  };

  const getOptions = async (): Promise<IOption[] | undefined> => {
    const airports = new AirportsApi();
    const allAirports = await airports.getAirports();
    const result: Array<any> = [];
    allAirports.forEach(async (airport: any) => {
      result.push({
        value: airport.id,
        label: airport.name,
      });
    });
    return result;
  };

  useEffect(() => {
    getOptions().then((result) => result && setAirports(result));
  }, []);

  const getOccupiedPlaces = async (): Promise<string[]> => {
    const ticket = new TicketApi();
    const allOccupiedPlaces = await ticket.getOccupiedPlaces();
    return allOccupiedPlaces.map((placeNumber) => placeNumber.placeNumber);
  };

  useEffect(() => {
    getOccupiedPlaces().then((result) => result && setOccupiedPlaces(result));
  }, []);

  const getTimeOptions = (): IOption[] | undefined => {
    return [{ value: '08:30', label: '08:30' }];
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
        {from && to && startTime ? (
          <div className={getAllowedClasses(styles.buyTicketsPlaneSchema)}>
            <PlaneSeatsGrid
              occupiedPlaces={occupiedPlaces}
              seatsCount={78}
              onSeatClick={onSeatClick}
              selected={selectedPlace}
            />
          </div>
        ) : (
          <img
            src={airwaysImage}
            className={getAllowedClasses(styles.menuImage)}
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
            placeholder="Start Date"
            lang="en-US"
            min={new Date().toISOString().slice(0, 10)}
          />
          <Select
            options={getTimeOptions()}
            handleSelectChange={handleSelectChangeDate}
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
