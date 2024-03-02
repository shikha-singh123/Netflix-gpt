
import {useState} from "react";
import Header from "./Header";

const In=()=>{
 
  const [isSignInForm,setIsSignInForm]=useState(true);


    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
    return( <div>
          <Header/> 
          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="logo"/>
          </div >
          
          <form className=" w-3/12 absolute p-12   bg-black my-24 mx-auto left-0 right-1 text-white rounded-lg bg-opacity-80" >
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" :"Sign Up"}</h1>   
          
            {!isSignInForm && (
            <input type="name"
            placeholder="Full name" 
            className="p-2 my-7 w-full bg-gray-500"/>
            )
            }
          <input type="text"
           placeholder="Email address" 
           className="p-2 my-7 w-full bg-gray-500"/>


            <input type="password" 
             placeholder="Password" 
             className="p-2 my-7 w-full bg-gray-500"/>
             
             
        <button className="p-4 my-7 bg-red-700 w-full rounded-lg" >{isSignInForm? "Sign In" :"Sign Up"}
         </button>
         
         <p className="text-white p-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm? "Sign In" :"Already registered Sign In Now"}
         </p>

             
         
             </form>
    </div>
    );
}
export default In;
