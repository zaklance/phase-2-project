import React from 'react';
// import { useState, useEffect } from 'react';
// import './App.css';
import { Outlet } from 'react-router-dom';
import NavHead from './NavHead';
// import Directive111 from './Directive111';
// import Abstract from './Abstract'
// import Form111 from './Form111';
// import DirectiveList from './DirectiveList';



function App() {
  function handleCopy() {
    const selBody = document.body;
    selBody.style.background = 'linear-gradient(#f05fa6, #ed1654)';
    setTimeout(revertBody, 100);
  }
  function revertBody(){
    const selBody = document.body;
    selBody.style.background = 'linear-gradient(#f6f6f6, #E7E5DF)';
  }

  return (
    <>
      <NavHead />
      <div className="wrapper" onCopy={handleCopy}>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
