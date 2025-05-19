import { useState } from "react";
import "./App.css";
import data from "./data.json";
import CardItem from "./component/cardItem/CardItem";

function App() {
  const [argent, setArgent] = useState(100);
  const [panier, setPanier] = useState([]);
  const [items, setItems] = useState(data);
  return (
    <>
      <div className="argent">
        <p>argent: {argent}€</p>
      </div>
      <div className="items">
        {items.map((element, index) => (
          <CardItem key={index} identite={element}/>
        ))}
      </div>
      <div className="panier"></div>
    </>
  );
}

export default App;
