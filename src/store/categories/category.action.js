import { async } from "@firebase/util"

import { getDocumentAndCategories } from "../../utils/firebase/firebase.utils"
import { USER_ACTION_TYPE } from "./category.types"

const createAction = (type,payload) => ({type ,payload})
// export const setcategories =(categoriesArray) => {
//    createAction(USER_ACTION_TYPE.SET_CATEGORY , categoriesArray)
   
// }

export const fetchcategoriesStart =() =>{
  return createAction(USER_ACTION_TYPE.SET_CATEGORY_START)
}
export const fetchcategoriesSuccess =(categoriesArray) =>{
 return  createAction(USER_ACTION_TYPE.SET_CATEGORY_SUCCESS,categoriesArray)
}
export const fetchcategoriesFailed =(error) =>{
  return createAction(USER_ACTION_TYPE.SET_CATEGORY_FAILURE,error)
}

export const fetchcategoriesAsync = () => 
{
 return async(dispatch) =>{
   
    dispatch(fetchcategoriesStart());
    
try{
   
  const categoriesArray = await getDocumentAndCategories('categories')
  
  console.log(categoriesArray)
  dispatch(fetchcategoriesSuccess(categoriesArray));
}catch(error){
   dispatch(fetchcategoriesFailed(error));
}

}
}