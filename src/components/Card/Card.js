import styles from "./Card.module.scss";
import React from "react";
function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickBy = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <img src={props.img} alt="sneakers"></img>
      <p>{props.title}</p>
      <div className={styles.cardItems}>
        <div className={styles.cardValue}>
          <span>Цена:</span>
          <span>{`${props.price} руб.`}</span>
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
