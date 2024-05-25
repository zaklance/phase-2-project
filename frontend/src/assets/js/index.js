import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    }, 
    {
      path: "/111",
      element: <About />,
      errorElement: <ErrorPage />
    }
  ];

// Copy Event Listener
// addEventListener("copy", () => {
//     selBody = document.body;
//     selBody.style.background = 'linear-gradient(#f05fa6, #ed1654)';
//     setTimeout(revertBody, 100);
// });
// function revertBody(){
//     selBody = document.body;
//     selBody.style.background = 'linear-gradient(#f6f6f6, #E7E5DF)';
// }

