/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { Menu, Label } from 'components/common';
import buyTicketsIcon from '../../assets/img/buy-tickets.png';
import planeGif from '../../assets/img/planegif.gif';
import { IOption, IPrices } from '../../common/interfaces';
import Select from './select';
import PlaneSeatsGrid from './plane-seats-grid';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'hooks';
import { AirportsApi, TicketApi, ScheduleApi, PlanesApi } from '../../services';

import { getAllowedClasses } from 'helpers';
import styles from './styles.module.scss';

const businessPlaces = ['A01', 'A02', 'B01', 'B02', 'C02', 'D02'];

const BuyTickets: React.FC = () => {
  const [inputDateType, setType] = useState('text');
  const [airports, setAirports] = useState<IOption[]>([]);
  const [occupiedPlaces, setOccupiedPlaces] = useState<string[]>([]);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [startTimes, setStartTimes] = useState<IOption[]>([]);
  const [scheduleId, setScheduleId] = useState<string>('');
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [endDate, setEndDate] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const onSeatClick = (seatLabel: string): void => {
    if (selectedPlaces.includes(seatLabel)) {
      setSelectedPlaces(
        [...selectedPlaces].filter((seat: string) => seat !== seatLabel),
      );
    } else {
      if (!occupiedPlaces.includes(seatLabel)) {
        setSelectedPlaces([...selectedPlaces, seatLabel]);
      }
    }
  };

  const handleSelectChangeTo = (selectedOption: IOption | null): void => {
    setTo(selectedOption?.value || '');
  };

  const handleSelectChangeFrom = (selectedOption: IOption | null): void => {
    setFrom(selectedOption?.value || '');
  };

  const handleSelectChangeTime = (selectedOption: IOption | null): void => {
    setScheduleId(selectedOption?.value || '');
  };

  const getOptionsTime = async (): Promise<IOption[] | undefined> => {
    const schedule = new ScheduleApi();
    const allTimes = await schedule.getTimes({
      from,
      to,
      startDate: startDate,
    });
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
    allAirports.forEach(async (airport: any) => {
      result.push({
        value: airport.id,
        label: airport.name,
      });
    });
    console.log(allAirports);
    return result;
  };

  const getOptionsEnd = async (): Promise<
    { [key: string]: string } | undefined
  > => {
    const schedule = new ScheduleApi();
    const end = await schedule.getEnd({ id: scheduleId });
    return { endDate: end.endDate, endTime: end.endTime };
  };

  useEffect(() => {
    getOptions().then((result) => result && setAirports(result));
  }, []);

  const getOccupiedPlaces = async (): Promise<string[]> => {
    console.log(scheduleId);

    const ticket = new TicketApi();
    const allOccupiedPlaces = await ticket.getOccupiedPlaces(scheduleId);
    return allOccupiedPlaces.map((placeNumber) => placeNumber.placeNumber);
  };

  useEffect(() => {
    getOccupiedPlaces().then((result) => result && setOccupiedPlaces(result));
  }, [scheduleId]);

  useEffect(() => {
    if (from && to && startDate) {
      getOptionsTime().then((result) => result && setStartTimes(result));
    }
  }, [from, to, startDate]);

  useEffect(() => {
    if (scheduleId) {
      getOptionsEnd().then((result) => {
        if (result) {
          setEndDate(result.endDate);
          setEndTime(result.endTime);
        }
      });
    }
  }, [scheduleId]);

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    setStartDate(value);
  };

  const handleFullNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    setFullName(value);
  };

  const getPrices = async (): Promise<IPrices> => {
    const planes = new PlanesApi();
    const prices = await planes.getPrices(scheduleId);
    return prices;
  };

  useEffect(() => {
    if (scheduleId) {
      const countOfSelectedBusinessPlaces = selectedPlaces.filter((place) =>
        businessPlaces.includes(place),
      ).length;
      const countOfSelectedNotBusinessPlaces =
        selectedPlaces.length - countOfSelectedBusinessPlaces;

      getPrices().then(
        ({ price, businessPrice }) =>
          price &&
          businessPrice &&
          setPrice(
            countOfSelectedBusinessPlaces * businessPrice +
              countOfSelectedNotBusinessPlaces * price,
          ),
      );
    }
  }, [selectedPlaces, scheduleId]);

  const handleBuyTickets = async (): Promise<void> => {
    setFrom('');
    setTo('');
    setScheduleId('');
    setSelectedPlaces([]);
    setStartDate('');
    setPrice(0);
    setEndDate('');
    setEndTime('');
    setFullName('');
    toast.success('Ticket was successfully purchased');
    const ticket = new TicketApi();
    const userId = localStorage.getItem('user') || '';
    const { price, businessPrice } = await getPrices();
    if (!userId) {
      await ticket.buyTicket(
        selectedPlaces.map((place) => ({
          userId,
          scheduleId,
          placeNumber: place,
          price: businessPlaces.includes(place) ? businessPrice : price,
          fullName,
        })),
      );
    } else {
      await ticket.buyTicket(
        selectedPlaces.map((place) => ({
          userId,
          scheduleId,
          placeNumber: place,
          price: businessPlaces.includes(place) ? businessPrice : price,
        })),
      );
    }
  };

  return (
    <>
      <Menu />
      <Label name="Купівля авіаквитків" iconPath={buyTicketsIcon} />
      <div className={getAllowedClasses(styles.buyTicketsContainer)}>
        {from && to && scheduleId ? (
          <div className={getAllowedClasses(styles.buyTicketsPlaneSchema)}>
            <PlaneSeatsGrid
              occupiedPlaces={occupiedPlaces}
              seatsCount={78}
              onSeatClick={onSeatClick}
              selected={selectedPlaces}
              businessPlaces={businessPlaces}
            />
          </div>
        ) : (
          <img
            src={planeGif}
            className={getAllowedClasses(styles.planeImage)}
          />
        )}
        <div className={getAllowedClasses(styles.buyTicketsForms)}>
          <Select
            value={airports.find((airport) => airport.value === from) || null}
            options={airports}
            handleSelectChange={handleSelectChangeFrom}
            placeholder="From"
          />
          <Select
            value={airports.find((airport) => airport.value === to) || null}
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
            value={startDate}
          />
          <Select
            value={
              startTimes.find((startTime) => startTime.value === scheduleId) ||
              null
            }
            options={startTimes}
            handleSelectChange={handleSelectChangeTime}
            placeholder="Start time"
          />
          <div className={getAllowedClasses(styles.endDateField)}>
            {endDate || 'End date'}
          </div>
          <div className={getAllowedClasses(styles.endDateField)}>
            {endTime || 'End time'}
          </div>
          <div className={getAllowedClasses(styles.priceField)}>
            {price || 'Price'}
          </div>
          {!localStorage.getItem('user') && (
            <input
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          )}
          <div className={getAllowedClasses(styles.buttonContainer)}>
            <Button variant="success" onClick={handleBuyTickets}>
              buy
            </Button>
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
