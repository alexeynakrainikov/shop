function Cart({ onClickCart, onRemove, items = [], totalPrice }) {
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cartHeader">
          <p>Корзина</p>
          <button onClick={onClickCart}>
            <img src="\img\btnClose.svg" alt="close"></img>
          </button>
        </div>
        <div className="items">
          {items.map((item) => (
            <div key={item.itemId} className="cartItem">
              <img
                className="cartItem_logo"
                src={item.img}
                alt="sneakers"
              ></img>
              <div>
                <p>{item.title}</p>
                <p>{item.price} руб.</p>
              </div>
              <button>
                <img
                  onClick={() => {
                    onRemove(item);
                  }}
                  src="\img\btnClose.svg"
                  alt="close"
                ></img>
              </button>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Итого:</p>
          <p>{totalPrice} руб.</p>
        </div>
        <div className="by">
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
