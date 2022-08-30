import styles from "./Card.module.scss";
import React from "react";
function Card({ title, price, img, onClick, onRemove }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickBy = () => {
    if (!isAdded) {
      onClick();
      setIsAdded(!isAdded);
    } else {
      onRemove();
      setIsAdded(!isAdded);
    }
  };

  return (
    <div className={styles.card}>
      <img src={img} alt="sneakers"></img>
      <p>{title}</p>
      <div className={styles.cardItems}>
        <div className={styles.cardValue}>
          <span>Цена:</span>
          <span>{`${price} руб.`}</span>
        </div>
        <button>
          <img
            src={isAdded ? "/img/Group 95.svg" : "/img/plus.svg"}
            onClick={onClickBy}
            alt="plus"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
