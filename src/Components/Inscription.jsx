import React, { useState } from "react";
import ContainerBase from "./ConteneurBase";
import AlerteFormulaire from "./AlerteFormulaire";
import axios from "axios";
axios.defaults.withCredentials = true;

const serviceURL = "https://tp2weblawrence.azurewebsites.net";
//const serviceURL = "http://localhost:8081";

function Inscription() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [mdp, setMdp] = useState("");
  const [erreurs, setErreurs] = useState(null);
  const [messageSucces, setMessageSucces] = useState(null);

  /**
   *
   * @param {string} nom nom/prenom à valider
   * @returns un message d'erreur, si applicable
   */
  const validerNom = (nom) => {
    const regex = /^[a-zA-Z -]{3,}$/;
    return regex.test(nom)
      ? null
      : 'Le prenom/nom peut contenir au moins 3 lettres, des espaces et des "-"';
  };

  /**
   *
   * @param {string} nomUtilisateur nom d'utilisateur à valider
   * @returns un message d'erreur, si applicable
   */
  const validerNomUtilisateur = (nomUtilisateur) => {
    const regex = /^[a-zA-Z0-9_-]{3,}$/;
    return regex.test(nomUtilisateur)
      ? null
      : 'Le nom d\'utilisateur peut contenir au moins 3 caractères alphanumériques, "-" et "_"';
  };

  /**
   *
   * @param {string} mdp mot de passe à valider
   * @returns un message d'erreur, si applicable
   */
  const validerMotDePasse = (mdp) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/;
    return regex.test(mdp)
      ? null
      : "Le mot de passe doit contenir au moins 8 caractères, au moins 1 lettre majuscule, au moins un chiffre et aucun espace";
  };

  /**
   * Valider les champs du formulaire
   * @returns un tableau contenant des messages d'erreur, si présents
   */
  const validerChamps = () => {
    let prenomValide = validerNom(prenom);
    let nomValide = validerNom(nom);
    let nomUtilisateurValide = validerNomUtilisateur(nomUtilisateur);
    let mdpValide = validerMotDePasse(mdp);
    return prenomValide === null &&
      nomValide === null &&
      nomUtilisateurValide === null &&
      mdpValide === null
      ? null
      : [prenomValide, nomValide, nomUtilisateurValide, mdpValide];
  };

  /**
   * Enregistre un utilisateur en BD si tous les champs sont valides
   * @param e événement ayant appelé cette méthode
   */
  const enregistrerUtilisateur = (e) => {
    e.preventDefault();
    setMessageSucces(null);
    setErreurs(null);
    const erreursValidations = validerChamps();

    if (erreursValidations === null) {
      enregistrerUtilisateurBD(prenom, nom, nomUtilisateur, mdp);
      setMessageSucces([
        `Bienvenue ${nomUtilisateur}`,
        "Vous pouvez maintenant vous connecter!",
      ]);

      viderChamps();
    } else {
      setErreurs(erreursValidations);
    }
  };

  const viderChamps = () => {
    setPrenom("");
    setNom("");
    setNomUtilisateur("");
    setMdp("");
  };

  const enregistrerUtilisateurBD = (prenom, nom, nomUtilisateur, mdp) => {
    //TODO: ajuster l'appel avec le service REST
    const utilisateurData = {
      prenom: prenom,
      nom: nom,
      username: nomUtilisateur,
      password: mdp,
    };
    axios.post(serviceURL + "/ajouterUser", utilisateurData).catch((err) => {
      setErreurs(["Le nom d'utilsiateur existe déjà"]);
    });
  };

  return (
    <ContainerBase>
      <AlerteFormulaire erreurs={erreurs} succes={messageSucces} />
      <form onSubmit={enregistrerUtilisateur}>
        <label className='form-element' htmlFor='prenomInput'>
          Prénom
        </label>
        <input
          id='prenomInput'
          type='text'
          onChange={(e) => setPrenom(e.target.value)}
          value={prenom}
        />

        <label className='form-element' htmlFor='nomInput'>
          Nom
        </label>
        <input
          id='nomInput'
          type='text'
          onChange={(e) => setNom(e.target.value)}
          value={nom}
        />

        <label className='form-element' htmlFor='nomUtilisateurInput'>
          Nom d'utilisateur
        </label>
        <input
          id='nomUtilisateurInput'
          type='text'
          onChange={(e) => setNomUtilisateur(e.target.value)}
          value={nomUtilisateur}
        />

        <label className='form-element' htmlFor='motDePasseInput'>
          Mot de passe
        </label>
        <input
          id='motDePasseInput'
          type='password'
          onChange={(e) => setMdp(e.target.value)}
          value={mdp}
        />

        <button className='form-element' type='submit'>
          S'inscrire
        </button>
      </form>
    </ContainerBase>
  );
}

export default Inscription;
