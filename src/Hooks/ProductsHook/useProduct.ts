
import useFavoriteStore from "@/Pages/Favorites/FavoritesStore";
import { useState } from "react";
import useProductStore from "@/components/Products/ProductStore";


const useProduct = (homePage:boolean)=>{
    
    const { products } = useProductStore();
    const [isAnimating,setIsAnimating] = useState(false)

    const actualProductList = homePage ? products.slice(0, 4) : products;

    const { addProductToFavList, favoritesItems, deleteProductFromFav } =useFavoriteStore();

    const [favItems, setFavItems] = useState(favoritesItems.map((item) => item.id));

  return{

    products,
    isAnimating,
    setIsAnimating,
    actualProductList,
    addProductToFavList,
    deleteProductFromFav,
    favItems,
    setFavItems
  }
}


export default useProduct;