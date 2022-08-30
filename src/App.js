import Card from "./components/Card/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";
import axios from "axios";

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
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);

  async function getData() {
    const res = await fetch(
      "https://630668eac0d0f2b8011ca8aa.mockapi.io/sneakers"
    );
    const data = await res.json();
    setSneakers(data);
  }

  React.useEffect(() => {
    axios
      .get("https://630668eac0d0f2b8011ca8aa.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    getData();
  }, []);

  const onRemoveFromCart = (cartItem) => {
    axios.delete(
      `https://630668eac0d0f2b8011ca8aa.mockapi.io/cart/${cartItem.id}`
    );
    setCartItems((prev) => prev.filter((item) => item.id !== cartItem.id));
    setTotalPrice((prev) => prev - cartItem.price);
  };

  const addToCart = (el) => {
    axios
      .post("https://630668eac0d0f2b8011ca8aa.mockapi.io/cart", el)
      .then(() =>
        axios
          .get("https://630668eac0d0f2b8011ca8aa.mockapi.io/cart")
          .then((res) => {
            setCartItems(res.data);
          })
      );
    setTotalPrice((prev) => prev + el.price);

    // setCartItems((prev) => [...prev, el]);
  };
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Cart
          items={cartItems}
          onClickCart={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
          totalPrice={totalPrice}
        />
      ) : null}

      <Header totalPrice={totalPrice} onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          {sneakers.map((el) => (
            <Card
              onClick={() => addToCart(el)}
              title={el.title}
              price={el.price}
              img={el.img}
              onRemove={() => {
                cartItems.map((elem) => {
                  if (elem.itemId === el.itemId) {
                    onRemoveFromCart(elem);
                  }
                });
              }}
              key={el.itemId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
