import React from 'react';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

export enum seatStates {
  vacant = 'vacant',
  occupied = 'occupied',
  selected = 'selected',
}

type Props = {
  seatState: seatStates;
  seatLabel: string;
};

const PlaneSeatButton: React.FC<Props> = ({ seatState, seatLabel }) => {
  return (
    <button className={getAllowedClasses(styles[seatState])}>
      {seatLabel}
    </button>
  );
};

export default PlaneSeatButton;
