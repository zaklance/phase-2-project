import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHead from './NavHead';




function App() {
  function handleCopy() {
    const selBody = document.body;
    selBody.style.background = 'linear-gradient(#f05fa6, #ed1654)';
    setTimeout(revertBody, 100);
  }
  function revertBody() {
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
