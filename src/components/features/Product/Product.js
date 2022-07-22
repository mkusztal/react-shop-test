import React from 'react';
import styles from './Product.module.scss';

class Product extends React.Component {

  render(){
    return (
      <div className={styles.root}>
        <div className={styles.item}>
          <div className={styles.product_images}>
          </div>
        </div>
        <div className={styles.item}>{/* jedno główne zdjęcie produktu */}</div>
        <div className={styles.item}>
          {/* nazwa, rozmiar, color , cena ( zmienić dane w magazynie + wyświetlić pojedyńcze wartości w Products nie spread) */}
        </div>
      </div>
    );
  }
};

export default Product;
