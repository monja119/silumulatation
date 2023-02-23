import React, { Component } from "react";
import {BackLink} from "../../BackLink";
import "./Login.css";

export default class Login extends Component {
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
					<form action="https://c8f3-154-126-79-169.eu.ngrok.io/login/" method="post">
						<h1>Bienvenu</h1>
						<input type="email" name="email" placeholder="Example@esti.mg" required/>
                        <input type="password" name="password" placeholder="mot de passe" required/>
						<button type="submit">SIGN IN</button>
                        <span>_____or_____</span>
                        <a href="choix.html">SIGN UP</a>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="image">
                    <img src="./img/Esti-logo.png" alt=""/>
                </div>
			</div>
		</div>
	</section>
      </div>
    );
  }
}