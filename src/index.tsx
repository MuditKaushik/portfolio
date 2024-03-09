import '@popperjs/core/dist/esm/popper';
import 'bootstrap/dist/js/bootstrap.esm';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRoutes } from './App.routes';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>
);
