import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoryReducer';
import { getProducts } from '../../../redux/productReducer';

const Products = () => {
  const categories = useSelector(getCategories);
  const products = useSelector(getProducts);

  return (
    <div>
      <h1></h1>
      <div className={styles.menu}>
        <ul>
          {products.map((categories) => (
            <li key={categories}>
              <a className={styles.text}>{categories}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
