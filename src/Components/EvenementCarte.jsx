import axios from "axios";
import React from "react";
import { redirect } from "react-router-dom";

axios.defaults.withCredentials = true;

const serviceURL = "https://tp2weblawrence.azurewebsites.net";
// const serviceURL = "http://localhost:8081";

function EvenementCarte(props) {
  const dateToString = (dateString) => {
    let date = new Date(dateString);
    let annee = date.getFullYear();
    let mois = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero based
    let jour = ("0" + date.getDate()).slice(-2);
    return annee + "-" + mois + "-" + jour;
  };

  const supprimerEvenement = () => {
    const evenement_id = props.evenement.event_id;
    axios
      .delete(serviceURL + "/supprimerEvenement", {
        data: { event_id: evenement_id },
      })
      .then((res) => {
        redirect("/calendrier");
      })
      .catch((err) => {
        console.log("erreur de suppression: ", err);
      });
  };

  return props.evenement ? (
    <div className='card'>
      <div className='card-content'>
        <h2>{props.evenement.event_name}</h2>
        <p>
          {"Du " +
            dateToString(props.evenement.event_debut) +
            " au " +
            dateToString(props.evenement.event_fin)}
        </p>
        <button className='boutonSupprimer' onClick={supprimerEvenement}>
          Supprimer
        </button>
      </div>
    </div>
  ) : null;
}

export default EvenementCarte;
