import { useContext ,useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { categoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.components";


import "./category.styles.scss";

const  Category=() =>{
 const {category} = useParams();
 const {categoriesmap} = useContext(categoriesContext)
 
const [products,setproducts] = useState(categoriesmap[category])

useEffect(()=>{
    setproducts(categoriesmap[category]);
},[category ,categoriesmap])

return (
    <>
    <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
    <div className="category-container">
    
    {products && products.map(product=> <ProductCard key={products.id} products={product}/>)}
    </div>
    </>
)
}
export default Category;