import React, {Component} from "react";
import { Link } from "react-router-dom"
import "./Error.css"

class Error extends Component
{

    render()
    {
        return (<div className="container-fluid">
        <div className="error-page">
            <div className="row">
                <div className="col-1">
                    <h2 className="headline text-danger p-3">404</h2>
                </div>
                <div className="col-6 error-msg">
                    <div className="row">
                        <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
                    </div>
                    <div className="row">
                        <p>
                            We could not find the page " { window.location.href } "you were looking for.
                            Meanwhile, you may <Link to="/" className="text-decoration-none">return to homepage</Link>
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    </div>)
    }

}

export default Error