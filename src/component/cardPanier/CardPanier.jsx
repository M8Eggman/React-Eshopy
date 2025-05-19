import "./CardPanier.css";

function CardPanier({ informations, handleEnleverItem }) {
  return (
    <>
      <div className="cardPanier">
        <div className="cardPanierHeader">
          <img src={informations.img} alt="" />
        </div>
        <div className="cardPanierBody">
          <div className="cardPanierTitle">
            <p>
              {informations.nom}: {informations.quantite}
            </p>
          </div>
          <div className="cardPanierBouton">
            <button onClick={() => handleEnleverItem(informations)}>Enlever un Item</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPanier;
