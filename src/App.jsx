import { useState } from "react";
import "./App.css";
import data from "./data.json";
import CardItem from "./component/cardItem/CardItem";
import CardPanier from "./component/cardPanier/CardPanier";

function App() {
  const [argent, setArgent] = useState(100);
  const [panier, setPanier] = useState([]);
  const [items, setItems] = useState(data);

  const handleAjoutPanier = (element) => {
    if (element.stock > 0 && argent >= element.prix) {
      const newItems = items.map((item) => (item.identifiant === element.identifiant ? { ...item, stock: item.stock - 1 } : item));
      // mise à jour du panier
      setPanier((p) => {
        if (p.find((item) => item.identifiant === element.identifiant)) {
          // incrémente la quantité de 1
          return p.map((item) => (item.identifiant === element.identifiant ? { ...item, quantite: item.quantite + 1 } : item));
        } else {
          // ajoute la clé quantite et la fixe a 1
          return [...p, { ...element, quantite: 1 }];
        }                
      });
      // mise à jour des stock 
      setItems(newItems);
       // mise à jour de l'argent
      setArgent(argent - element.prix);
    }
  };

  const handleEnleverItem = (element) => {
    if (element.quantite > 0) {
      const newItems = items.map((item) => (item.identifiant === element.identifiant ? { ...item, stock: item.stock + 1 } : item));
      // mise à jour du panier
      setPanier((p) => {
        return (
          p
            // je décrémente quantité
            .map((item) => (item.identifiant === element.identifiant ? { ...item, quantite: item.quantite - 1 } : item))
            // Je garde que ceux qui ont encore une quantité non nul
            .filter((item) => item.quantite > 0)
        );
      });
      // mise à jour des stock
      setItems(newItems);
      // mise à jour de l'argent
      setArgent(argent + element.prix);
    }
  };

  return (
    <>
      <div className="argent">
        <p>Argent: {argent}€</p>
      </div>
      <section className="shop">
        <div className="items">
          {items.map((element) => (
            <CardItem key={element.identifiant} informations={element} handleAjoutPanier={() => handleAjoutPanier(element)} />
          ))}
        </div>
        <div className="panier">
          {panier.length === 0 ? (
            <p>Il n'y a pas d'élément dans le panier</p>
          ) : (
            panier.map((element) => <CardPanier key={element.identifiant} informations={element} handleEnleverItem={() => handleEnleverItem(element)} />)
          )}
        </div>
      </section>
    </>
  );
}

export default App;
