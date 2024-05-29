import App from "../../App";
import Abstract from "../../Abstract";
import Directive111 from "../../Directive111";
import Directive211 from "../../Directive211";
import Theory from "../../Theory";
import ErrorPage from "../../ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Abstract />
            }, 
            {
                path: "/111-Mass-in-a-Box",
                element: <Directive111 />
            },
            // {
            //     path: "/211-Cohesion-&-the-Outcast",
            //     element: <Directive211 />
            // },
            {
                path: "/Theory",
                element: <Theory />
            }
        ]
    }
  ];

  export default routes;