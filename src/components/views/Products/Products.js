import { useSelector } from 'react-redux';
//import { getCategories } from '../../../redux/categoryReducer';
import { getProducts } from '../../../redux/productReducer';

import Product from '../../features/Product/Product';
import styles from './Products.module.scss';
const Products = () => {
  const products = useSelector(getProducts);

  return (
    <div>
      <div>
        <h1>Category name</h1>
      </div>
      <div className={styles.box}>
        <ul>
          {products.map((product) => (
            <div className={styles.card}>
              <Product {...product} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
