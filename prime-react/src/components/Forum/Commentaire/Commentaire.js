import React, {Component} from "react";

export default class Commentaire extends Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {

        return (
            <div className="Commentaire">
				<div className="media">
					<img src={this.props.img} className="mr-3 ImgForum" alt="..."/>
					<div className="media-body">
						<h5 className="mt-0">{this.props.name}</h5>
						<p>{this.props.content}</p>
					</div>
				</div>
				<hr/>
            </div>
        )

    }

}