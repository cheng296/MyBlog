import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import { Fragment } from 'react';

const App: React.FC = () => {
  const element = useRoutes(routes)
  return (
    <Fragment>
      {element}
    </Fragment>
  );
}
export default App;
