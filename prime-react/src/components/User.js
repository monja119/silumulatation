import React from 'react';
import { GetDataUser } from '../Datas/getData_User';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      error: null,
    };
  }

  componentDidMount() {
    const getDataUser = new GetDataUser();

    getDataUser.getData()
      .then(() => {
        this.setState({
          userData: getDataUser.getUserData(),
          error: getDataUser.getError(),
        });
      })
      .catch(() => {
        this.setState({ error: 'Une erreur est survenue lors de la requête.' });
      });
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
        <pre>{userData[2].registerDate}</pre>
      </div>
    );
  }
}

export default User;



// import React, { useState, useEffect } from 'react';
// import { GetDataUser } from '../Datas/Data_User';

// function User() {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getDataUser = new GetDataUser();

//     getDataUser.getData()
//       .then(() => {
//         setUserData(getDataUser.getUserData());
//         setError(getDataUser.error);
//       })
//       .catch((err) => {
//         setError('Une erreur est survenue lors de la requête.');
//       });
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!userData) {
//     return <div>Chargement en cours...</div>;
//   }

//   return (
//     <div>
//       <h1>Données utilisateur :</h1>
//       <pre>{userData[0].registerDate}</pre>
//     </div>
//   );
// }

// export default User;