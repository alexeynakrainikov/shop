function Cart(props) {
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cartHeader">
          <p>Корзина</p>
          <button onClick={props.onClickCart}>
            <img src="\img\btnClose.svg" alt="close"></img>
          </button>
        </div>
        <div className="items">
          <div className="cartItem">
            <img
              className="cartItem_logo"
              src="\img\image 1.jpg"
              alt="sneakers"
            ></img>
            <div>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <p>12 999 руб.</p>
            </div>
            <button>
              <img src="\img\btnClose.svg" alt="close"></img>
            </button>
          </div>
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
