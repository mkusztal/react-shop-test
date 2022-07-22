import React from 'react';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ProductBox extends React.Component {

  render(){
    return (
      <div>
          <div className={styles.box}>
            <Link to={'/product/' + this.props.id}>
              <div className={styles.card}>
                <img className={styles.image} src={this.props.image} alt="product" />
              </div>
              <div className={styles.text}>
                <p>{this.props.name}</p>
                <p>
                  <b>${this.props.price}.00</b>
                </p>
              </div>
            </Link>
            <div className={styles.basket_icon}>
              <FontAwesomeIcon className={styles.basket} icon={faShoppingBasket} />
            </div>
          </div>
      </div>
    );
  }
};

export default ProductBox;