import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productReducer';

import Product from '../../features/ProductBox/ProductBox';
import styles from './Products.module.scss';

const Products = () => {
  const products = useSelector(getProducts);

  return (
    <div className={styles.root}>
      <div className={styles.category_name}>
        <h1>Category name</h1>
      </div>
      <div className={styles.box}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
