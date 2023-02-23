import React, { Component } from "react";
import "./Signup.css"

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Signup">
        <section>
          <div>
            <div>
              <div>
                <form action="https://c8f3-154-126-79-169.eu.ngrok.io/new/etudiant/" method="post">
                  <h1>Etudiant</h1>
                  <p>Nom</p>
                  <input name="nom" type="text" placeholder="" />
                  <p>Prénom</p>
                  <input name="prenom" type="text" placeholder="" />
                  <p>Adresse email</p>
                  <input name="email" type="text" placeholder="" />
                  <p>Numéro</p>
                  <input name="numero" type="text" placeholder="" />

                  <p>Matricule</p>
                  <input type="text" name="matricule" placeholder="" />
                  <p>Niveau</p>
                  <select name="niveau" id="">
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="M1">M1</option>
                    <option value="M2">M2</option>
                  </select>
                  <br />
                  <br />
                  <p>Parcours</p>
                  <select name="parcours" id="">
                    <option value="IDEV">IDEV</option>
                    <option value="RSI">RSI</option>
                  </select>
                  <br />
                  <br />
                  <p>Mot de passe</p>
                  <input type="text" name="password" />
                  <button  type="submit" action="https://c8f3-154-126-79-169.eu.ngrok.io/">
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
            <div>
              <div>
                <img src="index.jpeg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}