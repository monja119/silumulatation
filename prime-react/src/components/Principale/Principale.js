import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";

export default class Principale extends Component
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