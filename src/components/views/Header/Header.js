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

import Currency from '../../features/Currency/Currency';

const Header = () => {
  const categories = useSelector(getCategories);

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <div className={styles.menu}>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
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
            {/* <Currency /> */}
          </div>
          <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
        </div>
      </div>  
    </header>
  );
};

export default Header;

