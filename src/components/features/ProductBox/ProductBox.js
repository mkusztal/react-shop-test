import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = ({ image, name, price, id }) => {
  return (
    <Link to={'/product/' + id}>
      <div className={styles.box}>
        <div className={styles.card}>
          <img className={styles.image} src={image} alt="product" />
        </div>
        <div className={styles.text}>
          <p>{name}</p>
          <p>
            <b>${price}.00</b>
          </p>
        </div>
        <div className={styles.basket_icon}>
          <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
        </div>
      </div>
    </Link>
  );
};

export default Product;
