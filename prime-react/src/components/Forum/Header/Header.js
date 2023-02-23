import React, {Component} from "react";

export default class Header extends Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {

        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Forum</h1>
                    <hr/>
                    <h2>Sujet: Lorem ipsum dolor sit amet</h2>
                    <p>Publié le 01 janvier 2022 par John Doe</p>
                    <hr/>
                </div>
            </div>
        )

    }

}