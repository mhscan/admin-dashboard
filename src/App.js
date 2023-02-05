import React from 'react';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Topbar from './Component/Topbar/Topbar';
import Sidebar from './Component/Sidebar/Sidebar'; 

function App() {
  let router = useRoutes(routes)
  return (
    <>
    <Topbar></Topbar>
    <div className="container">
      <Sidebar></Sidebar>
      {router}
    </div>
    
    </>
  );
}

export default App;
