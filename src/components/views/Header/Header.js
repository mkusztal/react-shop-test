import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoryReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag,
  faDollarSign,
  faShoppingBasket,
  faArrowDown,
  faEuroSign,
  faYenSign,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

const Header = () => {
  const categories = useSelector(getCategories);

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <div className={styles.menu}>
          <ul>
            {categories.map((category) => (
              <li key={categories}>
                <a href="#" className={styles.category}>
                  {category}
                </a>
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
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              <FontAwesomeIcon className={styles.dollar} icon={faDollarSign} />
              <FontAwesomeIcon
                className={styles.arrow_down}
                icon={faArrowDown}
              />
            </button>

            <div className={styles.dropdown_content}>
              <a href="#">
                <FontAwesomeIcon
                  className={styles.currency}
                  icon={faDollarSign}
                />
                USD
              </a>
              <a href="#">
                <FontAwesomeIcon
                  className={styles.currency}
                  icon={faEuroSign}
                />
                EUR
              </a>
              <a href="#">
                <FontAwesomeIcon className={styles.currency} icon={faYenSign} />
                YPY
              </a>
            </div>
          </div>
          <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
        </div>
      </div>
    </header>
  );
};

export default Header;
