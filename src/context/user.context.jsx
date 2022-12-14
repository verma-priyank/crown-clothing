import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState ,useEffect , useReducer } from "react";
import { onAuthStateChangedListener  ,signOutUser} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
     currentUser : "" ,
     setcurrentUser : ""

})

export const USER_ACTION_TYPE= {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}
const userReducer =(state,action) =>{
const {type , payload} = action;
console.log(state)
console.log(payload)
switch(type){
 case 'SET_CURRENT_USER':
   return{
    ...state,
       currentUser:payload 
   }
default :
throw new Error(`Unexpected type ${type} in userReducer`)

}
}
const INITIAL_STATE ={
  currentUser:null
}

export const UserProvider =({children}) =>{
    // const[currentUser , setcurrentUser] =useState("")
    
   
const [state , dispatch] = useReducer(userReducer,INITIAL_STATE)
const{currentUser} = state;
   const setcurrentUser = (user)=>{
    dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER , payload:user})
   }
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