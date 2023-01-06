import { createSelector } from "reselect";

export const selectorcategoriesreducer =(state)=> state.categoriesmap ;

const selectcategoriesMap = createSelector(
  [selectorcategoriesreducer],
  (categoriesslice) => categoriesslice.categories 
);

export const selectorcategories = createSelector(
  [selectcategoriesMap],
  (categories) => {
    return (categories.reduce((acc,category) =>{
      console.log(category)
        const {title ,items} = category;
        acc[title.toLowerCase()] = items ;
        return acc ;
  
      } , {}));
  }
)





// {
  
//   return state.categoriesmap.categories
// .reduce((acc,category) =>{
//     console.log(category)
//       const {title ,items} = category;
//       acc[title.toLowerCase()] = items ;
//       return acc ;

//     } , {});
//   }