import React from 'react';
import { seatStates } from 'common/enums';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  seatState: seatStates;
  seatLabel: string;
  onSeatClick: (seatLabel: string) => void;
};

const PlaneSeatButton: React.FC<Props> = ({ seatState, seatLabel, onSeatClick }) => {
  const handleSeatClick = ():void => {
    onSeatClick(seatLabel);
  };
  return (
    <button
      className={getAllowedClasses(styles[seatState])}
      onClick={handleSeatClick}
    >
      <p>{seatLabel}</p>
    </button>
  );
};

export default PlaneSeatButton;
