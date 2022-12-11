import { createContext ,useState  ,useEffect} from "react";

import { getDocumentAndCategories } from "../utils/firebase/firebase.utils.js";

 export const categoriesContext = createContext({
    categoriesmap :[],
    
})


export function   CategoriesProvider ({children}){
    const [categoriesmap , setcategoriesmap] = useState([]);
    useEffect(()=>{
        const getcategoriesMap = async() => {
            const categoryMap = await getDocumentAndCategories();
            console.log(categoryMap)
            setcategoriesmap(categoryMap)
        }
        getcategoriesMap();
    },[])

    
    const value = {categoriesmap ,setcategoriesmap }
    return (
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
    )
}