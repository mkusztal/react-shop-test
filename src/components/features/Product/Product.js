import styles from './Product.module.scss';
const Product = ({ image, name, price }) => {
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <img className={styles.image} src={image} alt="product" />
      </div>
      <div>
        <p>{name}</p>
        <p>
          <b>${price}.00</b>
        </p>
      </div>
    </div>
  );
};

export default Product;
