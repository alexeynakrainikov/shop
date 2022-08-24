function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cart">
          <h2>Корзина</h2>
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
          <div className="total">
            <p>Итого:</p>
            <p>21 498 руб.</p>
          </div>
          <div className="by">
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img src="img\logo.svg" alt="logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
              <img src="img\cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img src="img\Union.svg" alt="user" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img src="\img\image 1.jpg" alt="sneakers"></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardItems">
              <div className="cardValue">
                <span>Цена:</span>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="\img\plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="\img\image 2.jpg" alt="sneakers"></img>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="cardItems">
              <div className="cardValue">
                <span>Цена:</span>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="\img\plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="\img\image 3.jpg" alt="sneakers"></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardItems">
              <div className="cardValue">
                <span>Цена:</span>
                <span>8 499 руб.</span>
              </div>
              <button>
                <img src="\img\plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="\img\image 4.jpg" alt="sneakers"></img>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="cardItems">
              <div className="cardValue">
                <span>Цена:</span>
                <span>8 999 руб.</span>
              </div>
              <button>
                <img src="\img\plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
