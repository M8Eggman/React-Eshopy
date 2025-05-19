import "./CardItem.css";

function CardItem({identite}) {
  return (
    <>
      <div className="cardItem">
        <div className="cardItemHeader">
          <img src={identite.img} alt="" />
        </div>
        <div className="cardItemBody">
            <div className="cardItemTitle">
               <p>{identite.nom}</p>
            </div>
            <div className="cardItemInfo">
                <p>Prix: {identite.prix}€</p>
                <p>Stock: {identite.stock}</p>
            </div>
            <div className="cardItemPanier">
                <button>Ajouter au Panier</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
