import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";
import PrincipaleEntreprise from "./PrincipaleEntreprise";
import PrincipaleEtudiant from "./PrincipaleEtudiant";
import { Spinner } from 'react-bootstrap';
import Recherche from "./Recherche/Recherche";

export default class Principale extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            userData: null
        }
    }

    componentDidMount()
    {

            //get UserConnexion Data
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://c8f3-154-126-79-169.eu.ngrok.io/get_connected_user/', true);
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
        return <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>; // Ou un autre élément d'affichage pendant le chargement
    }
        if(userData.matricule === "" || userData.matricule === null || userData.matricule === undefined){
                
            return (
                <div className="Navbar">
                    <PrincipaleEntreprise/>               
                </div>
                )
        }
        return (
            <div className="Navbar">
                <PrincipaleEtudiant />               
            </div>
            )

    }

}