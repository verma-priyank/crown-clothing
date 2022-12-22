import { useContext ,useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { categoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.components";
import { selectorcategories } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";
import "./category.styles.scss";


const  Category=() =>{
 const {category} = useParams();
//  const {categoriesmap} = useContext(categoriesContext)
const categoriesmap = useSelector(selectorcategories)
const isLoading = useSelector(state=>state.categoriesmap.isLoading)
const [products,setproducts] = useState(categoriesmap[category])

useEffect(()=>{
    setproducts(categoriesmap[category]);
    
},[category ,categoriesmap])

return (
    <>
    {isLoading?<Spinner/>: (
        <><h2 className="category-title">{category.toLocaleUpperCase()}</h2>
    <div className="category-container">
    
    {products && products.map(product=> <ProductCard key={products.id} products={product}/>)}
    </div>
    </>)}
   
    </>
)
}
export default Category;