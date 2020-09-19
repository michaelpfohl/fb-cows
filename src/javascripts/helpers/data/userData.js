import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseURL}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.keys(resp.data).length === 0) {
        axios
          .post(`${baseURL}/farmers.json`, {
            image: userObj.photoURL,
            uid: userObj.uid,
            displayName: userObj.displayName,
            email: userObj.email,
            lastSignIn: userObj.metadata.lastSignInTime
          })
          .then(console.warn('user added'));
      } else {
        console.warn('user exists');
      }
    });
};

export default { getUser };
