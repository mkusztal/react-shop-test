import React from 'react';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import db from '../../../db.json'


class ProductBox extends React.Component {
  render(){
    return (
      <div>
        {db.products.map((product, index) => {
          <div key={index} className={styles.box}>
            <Link to={'/product/' + product.id}>
              <div className={styles.card}>
                <img className={styles.image} src={product.image} alt="product" />
              </div>
              <div className={styles.text}>
                <p>{product.name}</p>
                <p>
                  <b>${product.price}.00</b>
                </p>
              </div>
            </Link>
            <div className={styles.basket_icon}>
              <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
            </div>
          </div>
        })}
      </div>
    );
  }
};

export default ProductBox;
