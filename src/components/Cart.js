function Cart({ onClickCart, onRemove, items = [] }) {
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
            <div className="cartItem">
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
                    onRemove(item.id);
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
          <p>21 498 руб.</p>
        </div>
        <div className="by">
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
