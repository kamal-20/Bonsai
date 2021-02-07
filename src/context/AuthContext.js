import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import bonsaiApi from '../api/bonsai';
import { navigate } from '../navigatorRef';
import {firebase,db} from '../hooks/firebase';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', user: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { user: null, errorMessage: '' };
    default:
      return state;
  }
};


const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email,password );
        db.collection("users").add({
            email: email,
            profile_pic: ""
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    dispatch({ type: 'signin', payload: response });

    navigate('mainFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.message
    });
  }
};

// const signup = dispatch => async ({ email, password }) => {
//   try {
//     const response = await bonsaiApi.post('/signup', { email, password });
//     await AsyncStorage.setItem('token', response.data.token);
//     dispatch({ type: 'signin', payload: response.data.token });

//     navigate('mainFlow');
//   } catch (err) {
//     dispatch({
//       type: 'add_error',
//       payload: 'Something went wrong with sign up'
//     });
//   }
// };

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log(response);
    dispatch({ type: 'signin', payload: response });
    
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.message
    });
  }
};
// const signin = dispatch => async ({ email, password }) => {
//   try {
//     const response = await bonsaiApi.post('/signin', { email, password });
//     await AsyncStorage.setItem('token', response.data.token);
//     dispatch({ type: 'signin', payload: response.data.token });
//     navigate('mainFlow');
//   } catch (err) {
//     dispatch({
//       type: 'add_error',
//       payload: 'Something went wrong with sign in'
//     });
//   }
// };

const signout = dispatch => async () => {
  await firebase.auth().signOut().then(function() {
    dispatch({ type: 'signout' });
      navigate('Signin');
  }).catch(function(error) {
    console.log(error.message);
  });
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { user: {}, errorMessage: '' }
);