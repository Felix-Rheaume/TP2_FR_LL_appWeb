import axios from "axios";
import React from "react";

function EvenementCarte(props) {
  const supprimerEvenement = () => {
    console.log(props.title, " a été supprimé");
  };

  return props.title && props.content ? (
    <div className='card'>
      <div className='card-content'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button className='boutonSupprimer' onClick={supprimerEvenement}>
          Supprimer
        </button>
      </div>
    </div>
  ) : null;
}

export default EvenementCarte;
