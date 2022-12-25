import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getDocumentAndCategories } from "../utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import { fetchcategoriesStart } from "../store/categories/category.action";
// import { setcategories } from "../store/categories/category.action";
import CategoriesPreview from "../routes/categories-preview/categories-preview.component";
import Category from "../routes/category/category.component";
import "./shop.styles.scss";
function Shop() {
  const dispatch = useDispatch();
  // useEffect(()=>{
//     const getcategoriesMap = async() => {
//         const categoriesArray = await getDocumentAndCategories();
//         console.log(categoriesArray)
//         dispatch(setcategories(categoriesArray));
//     }
//     getcategoriesMap();
// },[])
useEffect(()=>{
  dispatch(fetchcategoriesStart());
},[])
  return <div className="shop-container">
  <Routes>
  <Route index element ={<CategoriesPreview/>} />
  <Route path=":category" element={<Category />} />
  </Routes>
  </div>;
}
export default Shop;
