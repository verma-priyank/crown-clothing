import { USER_ACTION_TYPE } from "./category.types";
const INITIAL_STATE = {
    categories :[],
    isLoading:false,
    error: null
}

export const categoriesReducer = (state =INITIAL_STATE,action={}) =>{
    const {type ,payload } =action ;
    switch (type){
        case USER_ACTION_TYPE.SET_CATEGORY_START:
            return({
                ...state,
                isLoading:true,

                
            })
        case USER_ACTION_TYPE.SET_CATEGORY_SUCCESS:
            return({
                ...state,
                categories : payload,
                isLoading:false
                
            })
        case USER_ACTION_TYPE.SET_CATEGORY_FAILURE:
            return({
                ...state,
                error : payload,
                isLoading :false
                
            })
            default:
                return state ;
    }
    
}