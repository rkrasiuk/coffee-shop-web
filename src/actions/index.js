import * as firebase from 'firebase';

export function loadOrders () {
  return dispatch => {
    firebase.database().ref('/').on('value', snap => {
      dispatch({
        type: 'LOAD_SECTIONS_SUCCESS',
        payload: snap.val()
      });
    });
  };
};