/* eslint-disable no-console */
import React from 'react';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';
import PlaneSeatButton from '../plane-seat-button';
import { seatStates } from 'common/enums/seats';

type Props = {
  seatsCount: number;
  selected: string;
  onSeatClick: (seatLabel: string) => void;
};

const businessSeats = ['A01', 'A02', 'B01', 'B02', 'C02', 'D02'];

const PlaneSeatsGrid: React.FC<Props> = ({
  seatsCount,
  onSeatClick,
  selected,
}) => {
  const rowsCount = (seatsCount + 2) / 4;
  const rows: Array<string> = [...Array(rowsCount).keys()].map((rowNum) =>
    rowNum < 9 ? `0${rowNum + 1}` : `${rowNum + 1}`,
  );

  const seatColumns = {
    A: [...Array(rowsCount).keys()].map((seatNum) => `A${rows[seatNum]}`),
    B: [...Array(rowsCount).keys()].map((seatNum) => `B${rows[seatNum]}`),
    C: [...Array(rowsCount - 1).keys()].map(
      (seatNum) => `C${rows[seatNum + 1]}`,
    ),
    D: [...Array(rowsCount - 1).keys()].map(
      (seatNum) => `D${rows[seatNum + 1]}`,
    ),
  };
  const seats: Array<string> = Object.values(seatColumns).reduce(
    (acc, column) => [...acc, ...column],
    [],
  );

  const topSeats: Array<string> = seats.slice(0, seatsCount / 2 + 1);
  const bottomSeats: Array<string> = seats.slice(
    seatsCount / 2 + 1,
    seatsCount,
  );

  return (
    <div
      className={getAllowedClasses(styles.generalGrid)}
      style={{ gridTemplateColumns: `1fr ${rowsCount - 1}fr` }}
    >
      <section
        className={getAllowedClasses(styles.topSeatsGrid)}
        style={{
          gridRow: '1/2',
          gridColumn: `1/${rowsCount}`,
          gridTemplateColumns: `repeat(${rowsCount}, 1fr)`,
        }}
      >
        {topSeats.map((seatNum) => {
          const seatState =
            seatNum === selected
              ? seatStates.selected
              : businessSeats.includes(seatNum)
                ? seatStates.business
                : seatStates.vacant;
          return (
            <PlaneSeatButton
              key={seatNum}
              seatLabel={seatNum}
              seatState={seatState}
              onSeatClick={onSeatClick}
            />
          );
        })}
      </section>

      <section
        className={getAllowedClasses(styles.rowNumbersGrid)}
        style={{
          gridRow: '2/3',
          gridColumn: `1/${rowsCount}`,
          gridTemplateColumns: `repeat(${rowsCount}, 1fr)`,
        }}
      >
        {rows.map((rowNum, key) => (
          <small key={key}>{rowNum}</small>
        ))}
      </section>

      <section
        className={getAllowedClasses(styles.bottomSeatsGrid)}
        style={{
          gridRow: '3/4',
          gridColumn: `2/${rowsCount}`,
          gridTemplateColumns: `repeat(${rowsCount - 1}, 1fr)`,
        }}
      >
        {bottomSeats.map((seatNum) => {
          const seatState =
            seatNum === selected
              ? seatStates.selected
              : businessSeats.includes(seatNum)
                ? seatStates.business
                : seatStates.vacant;
          return (
            <PlaneSeatButton
              key={seatNum}
              seatLabel={seatNum}
              seatState={seatState}
              onSeatClick={onSeatClick}
            />
          );
        })}
      </section>
    </div>
  );
};

export default PlaneSeatsGrid;
