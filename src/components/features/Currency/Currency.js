import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faEuroSign,
  faYenSign,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Currency.module.scss';

const Currency = () => {
  const [value, setValue] = useState(<FontAwesomeIcon icon={faDollarSign} />);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="dollar">
        <FontAwesomeIcon className={styles.currency} icon={faDollarSign} />
        USD
      </option>
      <option value="euro">
        <FontAwesomeIcon className={styles.currency} icon={faEuroSign} />
        EUR
      </option>
      <option value="yen">
        <FontAwesomeIcon className={styles.currency} icon={faYenSign} />
        YPY
      </option>
    </select>
  );
};

export default Currency;
