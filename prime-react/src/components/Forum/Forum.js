import React, {Component} from "react";
import Header from "./Header/Header";
import Commentaire from "./Commentaire/Commentaire";
import "./Forum.css";

export default class Forum extends Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {

        return (
        <div className="Forum">
            <div className="container">
                <Header/>   
                <div className="row">
                    <div className="col-md-8">
                        <h3>Commentaires</h3>
                        <br/>
                        <Commentaire img="https://via.placeholder.com/64x64" name="fanirina" content="Maecenas quis dui vel velit fermentum maximus. Aliquam erat volutpat. Morbi eu eros vel nunc venenatis suscipit eget at odio. Fusce feugiat mi vel ante aliquam convallis. Sed eget turpis id libero sagittis iaculis vel at leo. Sed euismod urna ut odio bibendum, sed consectetur magna luctus."/>    
                        <Commentaire img="https://via.placeholder.com/64x64" name="miantsa" content="Maecenas quis dui vel velit fermentum maximus. Aliquam erat volutpat. Morbi eu eros vel nunc venenatis suscipit eget at odio. Fusce feugiat mi vel ante aliquam convallis. Sed eget turpis id libero sagittis iaculis vel at leo. Sed euismod urna ut odio bibendum, sed consectetur magna luctus."/>    
                        
                        <form action="c8f3-154-126-79-169.eu.ngrok.io/forum" method="POST">
                            <div className="form-group">
                                <label htmlfor="commentaire" className="LabelForum">Ajouter un commentaire:</label>
                                <textarea className="form-control TextareaForum" id="commentaire" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <h3>À propos du sujet</h3>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus lectus nisi, eget suscipit ex commodo in. Praesent vari</p>
                    </div>
                </div>                
            </div>
        </div>
        )

    }

}