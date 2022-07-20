import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productReducer';
import styles from './Product.module.scss';

const Product = () => {
  const products = useSelector(getProducts);
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <div className={styles.product_images}>
          {/* komponent pokazujacy karty zdjęć*/}
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
