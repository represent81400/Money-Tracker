import Header from "./components/Header";
import { useEffect, useState } from "react";
import products from "./products.json";
import Card from "./components/Card";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [money, setMoney] = useState(150000000);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className={"container"}>
        <Card
          basket={basket}
          setBasket={setBasket}
          products={products}
          total={total}
          money={money}
        />
        {basket.length > 0 && (
          <Footer total={total} basket={basket} setBasket={setBasket} />
        )}
      </div>
    </>
  );
}

export default App;
