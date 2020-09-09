import React from 'react';
import { renderRoutes } from 'react-router-config';
import FiltersPage from './components/FiltersPage';
import { spaceValues } from './actions/spacedata';
import Header from "./components/Header";
import "./App.css";


const App = ({route}) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default{
  component: App,
  loadData: ({ dispatch }) => dispatch(spaceValues())
};
