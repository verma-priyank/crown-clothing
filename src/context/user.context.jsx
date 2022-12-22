
import { createContext,  useReducer } from "react";

export const UserContext = createContext({
     currentUser : "" ,
     setcurrentUser : ""

})


const INITIAL_STATE ={
  currentUser:null
}

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

export const UserProvider =({children}) =>{
    // const[currentUser , setcurrentUser] =useState("")
    
   
// const [state , dispatch] = useReducer(userReducer,INITIAL_STATE)
// const{currentUser} = state;
   
  //  const value ={currentUser  }
 

    // return (<UserContext.Provider value ={value}>{children}</UserContext.Provider>

    // )
}
// export default UserProvider ;