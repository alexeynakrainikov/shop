import Card from "./components/Card/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";
function App() {
  const arr = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      img: "img/image 1.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      img: "img/image 2.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      img: "img/image 3.jpg",
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      img: "img/image 4.jpg",
    },
  ];
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper">
      {cartOpened ? <Cart onClickCart={() => setCartOpened(false)} /> : null};
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          {arr.map((el) => (
            <Card title={el.title} price={el.price} img={el.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
