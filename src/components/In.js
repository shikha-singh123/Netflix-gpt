
import {useState,useRef} from "react";
import Header from "./Header";
import {checkValidateData}from '../utils/validate'
import {  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import {auth} from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import  {useDispatch} from "react-redux";
const In=()=>{
 
  const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=  useState(null);
     const navigate=useNavigate();
     const dispatch= useDispatch() ;


    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

  const handleButtonClick=()=>{
    //validation of form data
    console.log(email.current.value);
    // console.log(name.current.value);
   const message =checkValidateData(email.current.value,password.current.value)
      setErrorMessage(message);
      
      if(message)return;
      
      //create a new user -sign up/signin
    if(!isSignInForm){
           //SignUp logic

           createUserWithEmailAndPassword(
            auth,
             email.current.value, 
             password.current.value)

             .then((userCredential) => {
     const user = userCredential.user;

     updateProfile(user, {
      displayName: name.current.value,
       photoURL: "https://img.freepik.com/free-vector/girl-shy-character_1450-155.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais"
    }).then(() => {
      const{uid,email,displayName,photoURL}=auth.currentUser;   
      dispatch(
          addUser({ uid:uid,email:email,
            displayName:displayName,
          photoURL: photoURL
       })
       );



         navigate("/browse");
    }).catch((error) => {
      setErrorMessage(error.message);
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
  });
    }else{
             //SignIn logic
             signInWithEmailAndPassword(auth, email.current.value, password.current.value)
               .then((userCredential) => {
                 // Signed in 
                 const user = userCredential.user;
                 console.log(user);
                 navigate("/browse");
               })
               .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 setErrorMessage(errorCode+"-"+errorMessage);
               });
             


    }

      

     
      //sign in /Sign up

}
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
    return( <div>
          <Header/> 
          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="logo"/>
          </div >
          
          <form 
          onSubmit={(e)=>e.preventDefault()}
           className=" w-3/12 absolute p-12   bg-black my-24 mx-auto left-0 right-1 text-white rounded-lg bg-opacity-80" >
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" :"Sign Up"}</h1>   
          
            {!isSignInForm && (
            <input
            ref={name}
            type="name"
            placeholder="Full name" 
            className="p-2 my-7 w-full bg-gray-500"/>
            )
            }
          <input
          ref={email}
          type="text"
           placeholder="Email address" 
           className="p-2 my-7 w-full bg-gray-500"/>


            <input 
            ref={password}
             type="password" 
             placeholder="Password" 
             className="p-2 my-7 w-full bg-gray-500"/>
             
             <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
             
        <button className="p-4 my-7 bg-red-700 w-full rounded-lg" onClick= {handleButtonClick}>
        {isSignInForm? "Sign In" :"Sign Up"}
         </button>
         
         <p className="text-white py-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm? "New to Netflix ? Sign Up now" :"Already registered Sign In Now"}
         </p>

             
         
             </form>
    </div>
    );
}
export default In;
