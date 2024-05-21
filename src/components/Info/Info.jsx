/* eslint-disable react/prop-types */
//importing styles
import styles from "./Info.module.css";
const Info = ({ card, onClose }) => {
  return (
    <div className={styles.info_overlay} onClick={onClose}>
      <div className={styles.info_content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>
          X
        </button>
        <div className={styles.information}>
          <div className={styles.conttitle}>
            <div className={styles.title}>{card.Name}</div>
            <div className={styles.brandcont}>
              <img
                src={card.Brand}
                alt="brandimg"
                className={styles.brandimg}
              />
            </div>
          </div>
          <div className={styles.continfo}>
            <div className={styles.carimg}>
              <img src={card.Image} alt="carimg" className={styles.carimg} />
            </div>
            <div className={styles.carinfocont}>
              Year: {parseInt(card.Year)}
              <br />
              Seats: {parseInt(card.Seats)}
              <br />
              CC: {card.Engine}
              <br />
              Fuel-type: {card.Fuel_Type}
            </div>
          </div>
          <div className={styles.contprice}>${card.Price} USD</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
