import firebase from 'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.warn(user);
      $('#navbar-logout-button').removeClass('hide');
      $('#auth').addClass('hide');
      $('#pasture').removeClass('hide');
      $('#pasture').html(`<img src="${user.photoURL} alt="${user.displayName}">`);
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#pasture').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
