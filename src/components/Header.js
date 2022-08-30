function Header({ onClickCart, totalPrice }) {
  return (
    <header>
      <div className="headerLeft">
        <img src="img\logo.svg" alt="logo" />
        <div className="headerInfo">
          <h3>SPORTBLASTER</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="headerRight">
          <li onClick={onClickCart}>
            <img src="img\cart.svg" alt="cart" />
            <span> {totalPrice} руб.</span>
          </li>
          <li>
            <img src="img\Union.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
