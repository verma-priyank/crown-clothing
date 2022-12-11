import { useState  } from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss"
import Button from "../buttons/buttons.components";
function SignUpForm() {
  const [formField, setFormField] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  
  
  function handlechange(event) {
    const { name, value } = event.target;
    setFormField((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value,
      };
    });
    console.log(formField);
  }
  const handlesubmit = async (event) => {
    event.preventDefault();

    if (formField.password !== formField.confirmpassword) {
      alert("Password and confirm password does not match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        formField.email,
        formField.password
      );
      console.log(user)
      await createUserDocumentfromAuth(user ,  {displayName:formField.displayName} )
      setFormField({
        displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
      })
      
      
      
    } catch (error) {
      if(error.code ==="auth/email-already-in-use"){
        alert("email already in use")
      }
      console.log("user creation encountered an error ", error);
    }
  };
  return (
    <div className="sign-up-container">
    <h2>Don't have an account ?</h2>
      <span>Sign Up Using Email and Password</span>
      <form onSubmit={handlesubmit}>
        
        <FormInput
        label ="Display Name"
          type="text"
          required
          onChange={handlechange}
          name="displayName"
          value={formField.displayName}
        />

        
        <FormInput
        label = "Email"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={formField.email}
        />

        
        <FormInput
        label ="Password"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={formField.password}
        />

        
        <FormInput
        label ="Confirm Password"
          type="password"
          required
          onChange={handlechange}
          name="confirmpassword"
          value={formField.confirmpassword}
        />

        <Button type="submit"  buttontype="">Sign Up</Button>
      </form>
    </div>
  );
}
export default SignUpForm;
