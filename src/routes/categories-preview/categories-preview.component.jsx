import { useContext, Fragment } from "react";
import { categoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

function CategoriesPreview() {
  const { categoriesmap } = useContext(categoriesContext);
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
