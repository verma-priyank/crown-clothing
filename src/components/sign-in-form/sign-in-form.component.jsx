import { useState  } from "react";
import {
 
  createUserDocumentfromAuth,signINAuthUserWithEmailAndPassword,signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";
import Button from "../buttons/buttons.components";
function SignInForm() {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
 
  
  function handlechange(event) {
    const { name, value } = event.target;
    setFormField((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value,
      };
    });
  }
  async function logGoogleUser(){
    const {user} = await signInWithGooglePopup();
    await createUserDocumentfromAuth(user);
    console.log(user.uid)
    

}
  const handlesubmit = async (event) => {
    event.preventDefault();

   
    try {
      const {user} = await signINAuthUserWithEmailAndPassword(formField.email , formField.password);
     
      console.log(user)
      setFormField({
        email: "",
        password: "",
      });
    } catch (error) {
      alert(error.code)
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign In Using Email and Password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={formField.email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={formField.password}
        />
       <div className="buttons-container">
        <Button type="submit" buttontype="">
          Sign In
        </Button>
        <Button type='button' buttontype="google" onClick={logGoogleUser}>
         Google Sign In
        </Button>
        </div>
      </form>
    </div>
  );
}
export default SignInForm;
