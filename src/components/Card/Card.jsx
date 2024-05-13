/* eslint-disable react/prop-types */
//importing styles
import styles from "./Card.module.css";

const Card = ({ name, brand, price, seats, ccengine, year, fueltype, img }) => {
  return (
    <div className={styles.cardcont}>
      <div className={styles.conttitle}>
        <div className={styles.title}>{name}</div>
        <div className={styles.brandcont}>
          <img src={brand} alt="brandimg" className={styles.brandimg} />
        </div>
      </div>
      <div className={styles.continfo}>
        <div className={styles.carimg}>
          <img src={img} alt="carimg" className={styles.carimg} />
        </div>
        <div className={styles.carinfocont}>
          Seats: {seats}
          <br />
          CC: {ccengine}
          <br />
          Year: {year}
          <br />
          Fuel-type: {fueltype}
        </div>
      </div>
      <div className={styles.contprice}>${price} COP</div>
    </div>
  );
};

export default Card;
