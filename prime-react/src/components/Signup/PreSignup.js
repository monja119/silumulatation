import React, { Component } from "react";
import "./Signup.css"
export default class PreSignup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Login">
        <section class="sign-up">
		<div class="sign_box">
			<div class="left">
				<div class="contact">
					<form action="">
						<h1>Faite votre choix</h1>
						<button type="submit"><a href="Creer.html">ENTREPRISE</a></button>
                        <span>_____OU_____</span>
                        <button><a href="entreprise.html">ETUDIANT</a></button>
                           
                        
					</form>
				</div>
			</div>
			<div class="right">
				<div class="image">
                    <img src="index.jpeg" alt=""/>
                </div>
			</div>
		</div>
	</section>
      </div>
    );
  }
}