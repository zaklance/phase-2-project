import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import routes from './routes'


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   )

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);



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