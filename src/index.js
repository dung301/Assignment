import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
<<<<<<< Updated upstream
import CustomerScreen from './Customer/CustomerScreen';
import Admin_dashboard from './Admin/Admin_dashboard';
import PreOrderPage from './Customer/PreOrderInfor';
=======
>>>>>>> Stashed changes
import './index.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>

  </React.StrictMode>
);
