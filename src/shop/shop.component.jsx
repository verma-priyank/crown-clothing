import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../routes/categories-preview/categories-preview.component";
import Category from "../routes/category/category.component";
import "./shop.styles.scss";
function Shop() {
  return <div className="shop-container">
  <Routes>
  <Route index element ={<CategoriesPreview/>} />
  <Route path=":category" element={<Category />} />
  </Routes>
  </div>;
}
export default Shop;
