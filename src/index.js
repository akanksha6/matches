import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
import {auth, onAuthStateChanged} from './firebase';

import './Resources/css/app.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

onAuthStateChanged(auth, (user) => {
  root.render(
    <React.StrictMode>
      <RoutesApp user={user}/>
    </React.StrictMode>
  );
});