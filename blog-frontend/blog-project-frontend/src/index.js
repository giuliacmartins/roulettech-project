import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/posts" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
