import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoryReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  faShoppingBag,
  faDollarSign,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

const Header = () => {
  const categories = useSelector(getCategories);

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <div className={styles.menu}>
          <ul>
            {categories.map((categories) => (
              <li key={categories}>
                <a className={styles.text}>{categories}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.logo}>
          <FontAwesomeIcon className={styles.icon} icon={faShoppingBag} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <FontAwesomeIcon className={styles.dollar} icon={faDollarSign} />
          <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
        </div>
      </div>
    </header>
  );
};

export default Header;
