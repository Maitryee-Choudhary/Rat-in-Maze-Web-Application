import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './RatinMaze/App';
// import App from './components/App';
// import firebase from 'firebase';
// import {Provider} from 'react-redux';
// import store from './store/reducers/index';

 
//   const firebaseConfig = {
//     apiKey: "AIzaSyDKheynl8VItUD8FzyvLw8a82hgoFLZXmI",
//     authDomain: "messenger-f868f.firebaseapp.com",
//     projectId: "messenger-f868f",
//     storageBucket: "messenger-f868f.appspot.com",
//     messagingSenderId: "640485370218",
//     appId: "1:640485370218:web:2ff4cc2fae441e59a0dd13"
//   };
 
//   firebase.initializeApp(firebaseConfig);

   //window.store=store;
ReactDom.render(
    <>
    {/* <Provider store={store}> */}
    <BrowserRouter>
   <App />
   </BrowserRouter>
   {/* </Provider> */}
    </>,
    document.getElementById("root")
)