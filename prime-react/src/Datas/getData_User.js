import React, { useState, useEffect } from 'react';

class GetDataUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      error: null,
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
<<<<<<< HEAD
    xhr.open('GET', 'https://aff8-197-149-28-14.eu.ngrok.io', true);
=======
    xhr.open('GET', 'aff8-197-149-28-14.eu.ngrok.io/user/', true);
>>>>>>> 271adb577be9cf2affc40770b8cd8cddfc07c0fa
    xhr.onload = () => {
      if (xhr.status === 200) {
        const userData = JSON.parse(xhr.responseText);
        this.setState({ userData });
      } else {
        this.setState({ error: xhr.statusText });
      }
    };
    xhr.onerror = () => {
      this.setState({ error: 'Une erreur est survenue lors de la requête.' });
    };
    xhr.send();
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

export default GetDataUser;
