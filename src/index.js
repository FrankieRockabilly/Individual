import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './component/sidebar';
import Header, { Footers } from './component/Header';
import Contact from './component/contact';
import Profil from './component/portfolio';
import Portfolio from './component/portfolio';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    <Home />
    </>
  },
  {
    path: '/portfolio',
    element: <>
    <Header />
    {/* <Sidebar /> */}
    <Portfolio />
    <Footers />
    </>
  },
  {
    path: '/contact',
    element: <>
    <Header />
    {/* <Sidebar /> */}
    <Contact />
    <Footers />
    </>
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);





reportWebVitals();
