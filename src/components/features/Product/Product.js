import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getProducts } from '../../../redux/productReducer';
import styles from './Product.module.scss';

const Product = () => {
  const products = useSelector(getProducts);

  const [image, setImage] = useState();

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
};

export default Product;
