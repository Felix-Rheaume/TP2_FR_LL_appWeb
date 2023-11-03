import React from "react";
import Alert from "react-bootstrap/Alert";

/**
 * @returns Un message d'alerte approprié à la présence d'erreurs ou de succès. Sinon retourne rien
 */
function AlerteFormulaire(props) {
  const erreurs = props.erreurs
    ? props.erreurs.filter((err) => err !== null)
    : null;
  const succes = erreurs === null ? props.succes : null;

  let returnValue = null;

  if (succes || erreurs) {
    returnValue = (
      <Alert className='form-element' variant={succes ? "success" : "danger"}>
        <Alert.Heading>
          {succes ? "Inscription réussie" : "Erreurs présentes!"}
        </Alert.Heading>
        <ul>
          {succes
            ? succes.map((msg, index) => <li key={index}>{msg}</li>)
            : erreurs.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
      </Alert>
    );
  }

  return returnValue;
}

export default AlerteFormulaire;
