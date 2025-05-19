import { useState } from "react";
import "./App.css";
import data from "./data.json";
import CardItem from "./component/cardItem/CardItem";
import CardPanier from "./component/cardPanier/CardPanier";

function App() {
  function handleAjoutPanier(element) {
    if (element.stock > 0) {
      element.quantite += 1;
      element.stock -= 1;
      // Met à jour le stock et l'argent
      setItems([...items]);
      setArgent(argent - element.prix);
    }
  }
  function handleEnleverItem(element) {
    if (element.quantite > 0) {
      element.quantite -= 1;
      element.stock += 1;
      // Met à jour le stock et l'argent
      setItems([...items]);
      setArgent(argent + element.prix);
    }
  }
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
          <CardItem key={index} informations={element} handleAjoutPanier={handleAjoutPanier} />
        ))}
      </div>
      <div className="panier">
        {items.map((element, index) => {
          if (element.quantite > 0) {
            return <CardPanier key={index} informations={element} handleEnleverItem={handleEnleverItem} />;
          }
        })}
      </div>
    </>
  );
}

export default App;
