import { async } from "@firebase/util";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { auth ,signInWithGooglePopup ,createUserDocumentfromAuth ,signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'





const SignIn =() => {
    // useEffect(async ()=> {
    //    const {user} = await getRedirectResult(auth);
    //    const userDocReff = await createUserDocumentfromAuth(user);
    // } ,[])

//   const logGoogleUser = async () =>{
//     const response = await signInWithGooglePopup();
//     console.log(response);
//   }
   
  
    return (
        <div className="authentication-container">
        
        <SignInForm />
        <SignUpForm />
       
        </div>
    );
}

export default SignIn ;