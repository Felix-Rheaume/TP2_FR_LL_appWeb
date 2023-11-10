import React, { useState } from "react";
import ContainerBase from "./ConteneurBase";
import AlerteFormulaire from "./AlerteFormulaire";
import axios from "axios";
import { redirect } from "react-router-dom";
axios.defaults.withCredentials = true;

const serviceURL = "https://tp2weblawrence.azurewebsites.net";
// const serviceURL = "http://localhost:8081";

function Connexion(props) {
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [mdp, setMdp] = useState("");
  const [messageSucces, setMessageSucces] = useState(null);
  const [erreurs, setErreurs] = useState(null);

  const connecterUtilisateur = (e) => {
    e.preventDefault();

    axios
      .get(serviceURL + `/utilisateur/${nomUtilisateur}/${mdp}`,{
        withCredentials: true
      })
      .then((res) => {
        setErreurs(null);
        setMessageSucces(["Vous êtes maintenant connecté!"]);
        props.connected(true);
      })
      .catch((err) => {
        setMessageSucces(null);
        if (err.response && err.response.status === 401) {
          setErreurs([
            "Le nom d'utilisateur ou le mot de passe n'est pas valide",
          ]);
          props.connected(false);
        }
      })
      .finally(() => {
        setMdp("");
        setNomUtilisateur("");
        redirect("/");
      });
  };

  return (
    <ContainerBase>
      <AlerteFormulaire erreurs={erreurs} succes={messageSucces} />
      <form onSubmit={connecterUtilisateur}>
        <label className='form-element' htmlFor='nomUtilisateurInput'>
          Nom d'utilisateur
        </label>
        <input
          id='nomUtilisateurInput'
          type='text'
          onChange={(e) => setNomUtilisateur(e.target.value)}
          value={nomUtilisateur}
        />
        <label className='form-element' htmlFor='mdpInput'>
          Mot de passe
        </label>
        <input
          id='mdpInput'
          type='password'
          onChange={(e) => setMdp(e.target.value)}
          value={mdp}
        />
        <button className='form-element' type='submit'>
          Se connecter
        </button>
      </form>
    </ContainerBase>
  );
}

export default Connexion;
