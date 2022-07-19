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
  // [activeCategory, setActiveCategory] = useState(null);
  // [activeFade, setActiveFade] = useState(true);

  // const handleCategoryChange = (newCategory) => {
  //   // this.setState({
  //   //   activeFade: true,
  //   // });

  //   setTimeout(() => {
  //     this.setState({
  //       activeCategory: newCategory,
  //     });
  //   }, 250);

  //   if (activeFade === false) {
  //     setTimeout(
  //       function () {
  //         setActiveFade = false;
  //       }.bind(this),
  //       250
  //     );
  //   }
  //};
  return (
    <header className="header">
      <div className={styles.menu}>
        <ul>
          {categories.map((categories) => (
            <li key={categories}>
              <a className={styles.text}>{categories}</a>
            </li>
          ))}
        </ul>
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faShoppingBag} />
      <div className={styles.cart}>
        <FontAwesomeIcon className={styles.dollar} icon={faDollarSign} />
        <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
      </div>
    </header>
  );
};

export default Header;
