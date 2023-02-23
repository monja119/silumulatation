import React, {Component} from "react";
import Commentaire from "./Commentaire/Commentaire";
import "./Forum.css";
import GetDataForum, {getData} from "../../Datas/GetDataForum";

export default class Forum extends Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            userData: null
        };
    }

    componentDidMount()
    {

        //get Forum Data
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://c8f3-154-126-79-169.eu.ngrok.io/forum', true);
        xhr.withCredentials = true;
        xhr.onload = () => {
            
            const userData = JSON.parse(xhr.responseText);
            this.setState({ userData });
            
        }
        xhr.send();
    }

    render()
    {
        const { userData } = this.state;
        if (!userData) {
            return <div>Loading...</div>; // Ou un autre élément d'affichage pendant le chargement
        }
        
        const Forum = userData.map((userData, index) => (
            <div key={index} className="Forum">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{userData.titre}</h1>
                            <hr/>
                            <h2>{userData.titre}</h2>
                            <p>Publié le {userData.date} par John Doe</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <h3>Commentaires</h3>
                            <br/>
                            <Commentaire img="https://via.placeholder.com/64x64" name="fanirina" content={userData.contenu}/>                                
                            <form action="https://c8f3-154-126-79-169.eu.ngrok.io/forum" method="POST">
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
            
        ));

        return <div className="container">
                {Forum}
            </div>

    }

}