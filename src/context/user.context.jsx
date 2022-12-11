import { createContext, useState ,useEffect } from "react";
import { onAuthStateChangedListener  ,signOutUser} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
     currentUser : "" ,
     setcurrentUser : ""

})

export const UserProvider =({children}) =>{
    const[currentUser , setcurrentUser] =useState("")
    
   const value ={currentUser ,setcurrentUser }
  
  
  useEffect(()=>{
      const unsubscribe = onAuthStateChangedListener(user=>{
        console.log(user)
        setcurrentUser(user);
      });
      return unsubscribe;

  },[])

    return (<UserContext.Provider value ={value}>{children}</UserContext.Provider>

    )
}
export default UserProvider ;