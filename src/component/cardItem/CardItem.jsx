import "./CardItem.css";

function CardItem({ informations, handleAjoutPanier, argent }) {
  return (
    <>
      <div className="cardItem">
        <div className="cardItemHeader">
          <img src={informations.img} alt="" />
        </div>
        <div className="cardItemBody">
          <div className="cardItemTitle">
            <p>{informations.nom}</p>
          </div>
          <div className={informations.stock <= 3 && informations.stock > 0 ? "cardItemInfo lowStock" : informations.stock === 0 ? "cardItemInfo noStock" : "cardItemInfo"}>
            <p>Prix: {informations.prix}€</p>
            <p>Stock: {informations.stock}</p>
          </div>
          <div className="cardItemPanier">
            <button disabled={informations.stock === 0 || argent < informations.prix} onClick={() => handleAjoutPanier(informations)}>
              Ajouter au Panier
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
