import Card from "./components/Card/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";
function App() {
  // const arr = [
  //   {
  //     title: "Мужские Кроссовки Nike Blazer Mid Suede",
  //     price: 12999,
  //     img: "img/image 1.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Nike Air Max 270",
  //     price: 12999,
  //     img: "img/image 2.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Nike Blazer Mid Suede",
  //     price: 8499,
  //     img: "img/image 3.jpg",
  //   },
  //   {
  //     title: "Кроссовки Puma X Aka Boku Future Rider",
  //     price: 8999,
  //     img: "img/image 4.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Under Armour Curry 8",
  //     price: 15199,
  //     img: "img/image 5.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Nike Kyrie 7",
  //     price: 11299,
  //     img: "img/image 6.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Jordan Air Jordan 11",
  //     price: 10799,
  //     img: "img/image 7.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Nike LeBron XVIII",
  //     price: 16499,
  //     img: "img/image 8.jpg",
  //   },
  //   {
  //     title: "Мужские Кроссовки Nike Lebron XVIII Low",
  //     price: 13999,
  //     img: "img/image 9.jpg",
  //   },
  // ];

  const [sneakers, setSneakers] = React.useState([]);
  async function getData() {
    const res = await fetch(
      "https://630668eac0d0f2b8011ca8aa.mockapi.io/sneakers"
    );
    const data = await res.json();
    setSneakers(data);
  }
  getData();

  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper">
      {cartOpened ? <Cart onClickCart={() => setCartOpened(false)} /> : null};
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          {sneakers.map((el) => (
            <Card title={el.title} price={el.price} img={el.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
