import React from 'react';
import { seatStates } from 'common/enums/seats';
import { getAllowedClasses } from 'helpers';

import styles from './styles.module.scss';

type Props = {
  seatState: seatStates;
  seatLabel: string;
};

const PlaneSeatButton: React.FC<Props> = ({ seatState, seatLabel }) => {
 
  return (
    <button className={getAllowedClasses(styles[seatState])}>
      <p>{seatLabel}</p>
    </button>
  );
};

export default PlaneSeatButton;
