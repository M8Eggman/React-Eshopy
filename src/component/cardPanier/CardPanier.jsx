import "./CardPanier.css";

function CardPanier({ informations, handleEnleverItem }) {
  return (
    <>
      <div className="cardPanier">
        <div className="cardItemHeader">
          <img src={informations.img} alt="" />
        </div>
        <div className="cardItemBody">
          <div className="cardItemTitle">
            <p>{informations.nom}</p>
          </div>
          <div className="cardItemInfo">
            <p>Quantite {informations.quantite}</p>
          </div>
          <div className="cardItemPanier">
            <button onClick={() => handleEnleverItem(informations)}>Enlever un Item</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPanier;
