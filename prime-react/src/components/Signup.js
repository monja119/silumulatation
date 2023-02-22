import React, { Component } from 'react';

class Signup extends Component {

  constructor(props) {
    super(props)
  }

  render()
  {
    return <div className="signup-view">

    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-5">
  
          <div className="register-box">
            <div className="card">
              <div className="card-body register-card-body">
                <p className="login-box-msg">Register a new membership</p>
          
                <form action="../../index.html" method="post">
                  <div className="input-group mb-3">
                    <input type="text" name='name' className="form-control" placeholder="Name"/>
                    
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" name='matricule'className="form-control" placeholder="Matricule"/>
                    
                  </div>
                  
                  <div className="input-group mb-3">
                    <input type="email" name='email' className="form-control" placeholder="Email"/>
                  
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" name='password' className="form-control" placeholder="Password"/>
                    
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="agreeTerms" name="terms" value="agree"/>
                        <label for="agreeTerms">
                        I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary btn-block ">Register</button>
                    </div>
                  </div>
                </form>
          
                <div className="social-auth-links text-center">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary m-2">
                    Sign up using Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger m-2">
                    Sign up using Google+
                  </a>
                </div>
          
                <a href="login.html" className="text-center">I already have a membership</a>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>

  </div>

  }

}

export default Signup