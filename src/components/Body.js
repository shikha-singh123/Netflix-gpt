import { createBrowserRouter } from 'react-router-dom'; // Example import statement
import Browse from "./Browse";
import In from './In';

import { RouterProvider } from "react-router-dom";
const Body=()=>{

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<In/>
        },
        {
            path:'/browse',
            element:<Browse/>,
        },
    ])
 

    return (<div>
     <RouterProvider router={appRouter}/>
    </div>
    );
}
export default Body;
