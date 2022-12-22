import { useContext, Fragment } from "react";
import { useSelector } from "react-redux";
// import { categoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectorcategories } from "../../store/categories/category.selector";

function CategoriesPreview() {
  // const { categoriesmap } = useContext(categoriesContext);
  const categoriesmap = useSelector(selectorcategories)
  console.log(categoriesmap);
  return (
    <Fragment>
      {Object.keys(categoriesmap).map((title) => {
        console.log(title);
        const products = categoriesmap[title];
        console.log(products);
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
}
export default CategoriesPreview;
