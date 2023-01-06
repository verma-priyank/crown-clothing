import { USER_ACTION_TYPE } from "./user.types"
export const createAction = (type,payload) =>({type ,payload})

//  export const setcurrentUser = (user)=>(
    
    
//    createAction(USER_ACTION_TYPE.SET_CURRENT_USER , user)
   
//  )
 export const checkuserSession =() =>{
  
   return createAction(USER_ACTION_TYPE.CHECK_USER_SESSION)
 }
 export const googlesignInstart =() =>{
 return  createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);
 }
 export const emailsignInstart =(email , passward) =>{
  return createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START , {email , passward});
 }
 export const signInSuccess =(user) =>{
 return  createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS , user);
 }
 export const signInFailed =(error) =>{
 return createAction(USER_ACTION_TYPE.SIGN_IN_FAILED , error);
 }
 export const SignUpStart =(email , passward , displayName) =>{
  return createAction(USER_ACTION_TYPE.SIGN_UP_START, {email , passward , displayName})
 }
 export const SignUpsuccess=(user , additionalDetails) =>{
  return createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS , {user , additionalDetails})
 }
  export const signUpFailed =(error) =>{
    return createAction(USER_ACTION_TYPE.SIGN_UP_FAILED , error)
  }
  export const signOutStart =()=>{
    return createAction(USER_ACTION_TYPE.SIGN_OUT_START)
  }
  export const signOutSuccess =()=>{
    return createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS)
  }
  export const signOutFailed =(error)=>{
    return createAction(USER_ACTION_TYPE.SIGN_OUT_Failed , error)
  }