import React, { useState, useEffect } from 'react';

export default class GetDataForum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      error: null,
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://c8f3-154-126-79-169.eu.ngrok.io/forum', true);
    xhr.withCredentials = true;
    //xhr.open('GET', 'aff8-197-149-28-14.eu.ngrok.io/user/', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const userData = JSON.parse(xhr.responseText);
        this.setState({ userData });
        console.log(userData)
      } else {
        this.setState({ error: xhr.statusText });
      }
    };
    xhr.onerror = () => {
      this.setState({ error: 'Une erreur est survenue lors de la requête.' });
    };
    xhr.send();
  }


  getData()
  {
    return this.state.userData
  }

  render() {
    const { userData, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    if (!userData) {
      return <div>Chargement en cours...</div>;
    }

    return (
      <div>
        <h1>Données utilisateur :</h1>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
    );
  }
}
