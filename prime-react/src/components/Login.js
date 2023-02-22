import React, { Component } from 'react';

class Login extends Component 
{

    constructor(props) {
        super(props)
    }

    render()
    {
        return (<div className="HommeView">
        <div className="container-fluid">
          <div className="row justify-content-center mt-5 mr-2">
            <div className="col-6">
              <div className="login-box">
                {/* <div className="login-logo"></div> */}
                <div className="card">
                  <div className="card-body login-card-body">
                    <p className="je justify-content-center">Gestion des absences</p>
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="https://2e1b-154-126-98-66.eu.ngrok.io/login/" method="post">
                      <div className="input-group mb-3">
                        <input type="email" name='email' className="form-control" placeholder="Email" />
                      </div>
                      <div className="input-group mb-3">
                        <input type="password" name='password' className="form-control" placeholder="Password" />
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <div className="icheck-primary">
                            <input name="remember" type="checkbox" id="remember" />
                            <label htmlFor="remember">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    <div className="social-auth-links text-center mb-3">
                      <p>- OR -</p>
                      <a href="#" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2 m-2"></i> Sign in using Facebook
                      </a>
                      <a href="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2 m-2"></i> Sign in using Google+
                      </a>
                    </div>
                    {/* /.social-auth-links */}
                    <p className="mb-1">
                      <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p className="mb-0">
                      <a href="register.html" className="text-center">Register a new membership</a>
                    </p>
                  </div>
                  {/* /.login-card-body */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
    }

}
export default Login;