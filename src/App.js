import React from 'react';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Topbar from './Component/Topbar/Topbar';

function App() {
  let router = useRoutes(routes)
  return (
    <>
    <Topbar></Topbar>
      {router}
    </>
  );
}

export default App;
