import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row mh-100" style={{ height: "655px" }}>
          <div className="col-2 menu">
            <div className="row pt-2 student-content">
              <div className="col-2">
                {/* <img src="" alt="" style={{ width: "30px", height: "30px" }} /> */}
              </div>
              <div className="col-10 pt-1 text-light">
                <h6 id="user_full_name name">Full name</h6>
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