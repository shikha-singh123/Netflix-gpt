import { onAuthStateChanged,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {auth} from '../utils/firebase';
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
        const user=useSelector(store=>store.user);

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            // navigate("/");
        }).catch((error)=>{
      navigate("/error");
        });
    };

    useEffect(()=>{

        //setup eventListener for once

      const unsubscribe=  onAuthStateChanged(auth, (user) => {
          if (user) {
           
            const {uid,email,displayName,photoURL} = user;
               dispatch(addUser({ uid:uid,email:email,displayName:displayName,
               photoURL: photoURL
            })
            );
            navigate("/browse");
            
            
        } else {
            dispatch(removeUser());
            navigate("/");

          }
        });
        //unsubscribe when components unmount
        return ()=>unsubscribe();
     },[])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-50 flex justify-between ">
      <img className="w-44 " 
      src={LOGO}
       alt="logo"/>
       
      {user &&( <div className="flex p-2">
       <img className="w-12 h-14 "
       src={user?.photoURL}
       alt="usericon"/>
       <button onClick={handleSignOut}className="font-bold text-white p-4">Sign Out
       </button>
       </div>
    )}
    
       </div>
      
      )};
export default Header;
