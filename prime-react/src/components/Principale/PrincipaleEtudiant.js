import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";
import Recherche from "./Recherche/Recherche";

export default class PrincipaleEtudiant extends Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {

        return (
        <div className="Navbar">
            <Navbar />               
        </div>
        )

    }

}