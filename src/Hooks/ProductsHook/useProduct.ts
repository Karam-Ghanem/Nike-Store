
import useFavoriteStore from "@/Pages/Favorites/FavoritesStore";
import { useState } from "react";
import useProductStore from "@/components/Products/ProductStore";


const useProduct = (homePage:boolean)=>{
      const { products } = useProductStore();

//pagination
    const [currentPage,setCurrentPage] = useState(1);
    const produtsPerPage = 10;
    const lastIndex = currentPage * produtsPerPage;
    const firstIndex = lastIndex - produtsPerPage;

    
    const completePages =products.length>=produtsPerPage ?  parseInt((products.length / produtsPerPage).toFixed()) : 1;
    const lastPage = products.length % produtsPerPage;
    const needed =products.length>=produtsPerPage ? lastPage > 0 ? completePages+1 : completePages : 1;
    const [neededPages,setNeededPages] = useState(products.length>=produtsPerPage ? lastPage > 0 ? completePages+1 : completePages : 1)



    
    
//End Pagination

    const [isAnimating,setIsAnimating] = useState(false)


    const { addProductToFavList, favoritesItems, deleteProductFromFav } =useFavoriteStore();

    const [favItems, setFavItems] = useState(favoritesItems.map((item) => item.id));

    const actualProductList = homePage ? products.slice(0, 4) :  products.slice(firstIndex,lastIndex);


  return{
    products,
    isAnimating,
    setIsAnimating,
    actualProductList,
    addProductToFavList,
    deleteProductFromFav,
    favItems,
    setFavItems,
    currentPage,
    produtsPerPage,
    setCurrentPage,
    firstIndex,
    lastIndex,
    neededPages,
    setNeededPages,
    needed,
  }
}


export default useProduct;