import React from 'react';
import ProductBox from '../../features/ProductBox/ProductBox';
import styles from './Products.module.scss';
import db from '../../../db.json'

const productData = db.products;

class Products extends React.Component {
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.category_name}>
          <h1>Category name</h1>
        </div>
        <div className={styles.box}>
          {productData?.map((product, index) => (
            <div className={styles.card} key={index}>
              <ProductBox {...product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default Products;
