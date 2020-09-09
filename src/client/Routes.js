import React from 'react';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import FiltersPage from "./components/FiltersPage";


export default [
  {
    ...App,
    routes: [
      {
        ...FiltersPage,
        path: '/',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
