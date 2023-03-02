import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './Routes/RoutersList';
import { Fragment } from 'react';

function App() {

  const element = useRoutes(routes)
  return (
    <Fragment>
      {element}
    </Fragment>
  );
}

export default App;
