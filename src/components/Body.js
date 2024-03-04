import { createBrowserRouter} from 'react-router-dom'; // Example import statement
import Browse from "./Browse";
import In from './In';
import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";

const Body=()=>{
     const dispatch=useDispatch();
    //  const navigate=useNavigate();
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
     useEffect(()=>{

        //setup eventListener for once

        onAuthStateChanged(auth, (user) => {
          if (user) {
           
            const {uid,email,displayName,photoURL} = user;
               dispatch(addUser({ uid:uid,email:email,displayName:displayName,
               photoURL: photoURL
            }));
              
                 
            } else {
                dispatch(removeUser());
            // ...
          }
        });
        
     },[])

    return (<div>
     <RouterProvider router={appRouter}/>
    </div>
    );
}
export default Body;
//Without using useNavigate you can use window.location.href
//Move your router out
//Navigate when user sign-in and sign-out.