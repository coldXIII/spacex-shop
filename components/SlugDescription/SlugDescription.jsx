import React from 'react';
import styles from './slugdescription.module.scss';
import { useStateContext } from '../../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';

const SlugDescription = ({ product }) => {
  const { name, details, price } = product;
  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <div className={styles.SlugDescription}>
      <h1>{name}</h1>
      <p className={styles.price}>${price}.00</p>
      {details.map((item, index) => (
        <p className={styles.details}>{item}</p>
      ))}

      {/* <br />
      <br />
      <span className={styles.details}>
        <b>Toddler:</b> <br /> {details[1]}
      </span> */}

      <div className={styles.selects}>
        <select name="color">
          <option>Colour: White</option>
          <option>Colour: Black</option>
          <option>Colour: Gray</option>
        </select>
        <select>
          <option>Size: 0-3M</option>
          <option>Size: 3-6M</option>
          <option>Size: 6-9M</option>
        </select>
      </div>

      <div className={styles.quantity}>
        <div className={styles.buttons}>
          <button className={styles.minus} onClick={decQty}>
            <AiOutlineMinus />
          </button>
          <span className={styles.num}>{qty}</span>
          <button className={styles.plus} onClick={incQty}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.addtocart}
          onClick={() => onAdd(product, qty)}
        >
          <span> Add to Cart</span>
        </button>
      </div>
      <span className={styles.moreinfo}>
        more information <AiOutlineRight />
      </span>
    </div>
  );
};

export default SlugDescription;
