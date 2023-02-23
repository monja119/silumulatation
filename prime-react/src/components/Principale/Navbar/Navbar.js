import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForum: false,
      userData: null
    };
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

  ForumClick()
  {

  }

  render() {
    
    const { userData } = this.state;
        if (!userData) {
            return <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary" />
          </div>; // Ou un autre élément d'affichage pendant le chargement
        }
        console.log(userData)
    return (
      <div className="container-fluid">
        <div className="row mh-100" style={{ height: "655px" }}>
          <div className="col-2 menu">
            <div className="row pt-2 student-content">
              <div className="col-2">
                {/* <img src="" alt="" style={{ width: "30px", height: "30px" }} /> */}
              </div>
              <div className="col-10 pt-1 text-light">
                <h6 id="user_full_name name">{userData.prenom}</h6>
                <h6 id="user_full_name name">{userData.matricule}</h6>
              </div>
              <div className="row text-light">
                <div id="etudiant-part">
                  étudiant
                  bg
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="options">
                  <button type="button" className="btn btn-outline-ligh text-light">
                    home
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="options">
                  <button type="button" onClick={() => this.setState({ showForum: true })} className="btn btn-outline-ligh text-light">
                    Forum
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-1">
                <div className="col-12">
                    <div className="options">
                        <button type="button" className="btn btn-outline-ligh text-light">
                            Demandes
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-12">
                    <div className="options">
                        <button type="button" className="btn btn-outline-ligh text-light">
                            
                            Parcours
                        </button>
                    </div>
                </div>
            </div>
                
            <div className="row mt-1">   
                <div className="col-12">
                    <div className="options">
                        <button type="button" className="btn btn-outline-ligh text-light">
                            Tech-State
                        </button>
                    </div>
                </div>
            </div>
            <div className="row position-absolute bottom-0 start-2 mb-5 disconnect">   
                <div className="col-12">
                    <div className="options">
                        <button type="button" className="btn btn-outline-ligh text-light">
                            Déconnection
                        </button>
                    </div>
                </div>
            </div>

            </div> 
        </div>
    </div>

    )

    }

}