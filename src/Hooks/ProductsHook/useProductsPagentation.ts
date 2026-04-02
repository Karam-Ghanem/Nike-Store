
import useFavoriteStore from "@/Pages/Favorites/FavoritesStore";
import { useState } from "react";
import useProductStore from "@/components/Products/ProductStore";


const useProduct = ()=>{
      // const { products } = useProductStore();

//pagination
    // const [currentPage,setCurrentPage] = useState(1);
    // const produtsPerPage = 4;
    // const lastIndex = currentPage * produtsPerPage;
    // const firstIndex = lastIndex - produtsPerPage;

    
    // const completePages =products.length>=produtsPerPage ?  parseInt((products.length / produtsPerPage).toFixed()) : 1;
    // const lastPage = products.length % produtsPerPage;
    // const needed =products.length>=produtsPerPage ? lastPage > 0 ? completePages+1 : completePages : 1;
    // const [neededPages,setNeededPages] = useState(products.length>=produtsPerPage ? lastPage > 0 ? completePages+1 : completePages : 1)


    // const array = [];
    // for(let i=1;i<neededPages;i++){
    //   array[i]=i;
    // }




//start list pagentation 
  // const [currentSlider,setCurrentSlider] = useState(1);
  


  // const numberPerPage = 5;

    // const lastNumber = currentSlider * numberPerPage;
    // const firstNumber = lastNumber - numberPerPage;
   


    // const completeSlider =neededPages>=numberPerPage ?  parseInt((neededPages / numberPerPage).toFixed()) : 1;
    // const lastSlider = neededPages % numberPerPage;
    // const neededSliders =neededPages>=numberPerPage ? lastSlider > 0 ? completeSlider+1 : completeSlider : 1;
    // const nums =(products.length / numberPerPage) + (products.length % numberPerPage)
    // const nums =products.length 
    // const [nums,setNums] = useState(neededPages)
    
    // const numbers = [];
    // for(let i=1;i<=nums;i++){
    //   numbers[i]=i;
    // }

    // const [AllNumbers,setAllNumbers] = useState<number[]>(numbers)




    

//  const actualSlider = AllNumbers.slice(firstNumber,lastNumber)
    // const actualProductList = homePage ? products.slice(0, 4) :  products.slice(firstIndex,lastIndex);

 
    
    
//End Pagination
      const { products } = useProductStore();

    const [isAnimating,setIsAnimating] = useState(false)


    const { addProductToFavList, favoritesItems, deleteProductFromFav } =useFavoriteStore();

    const [favItems, setFavItems] = useState(favoritesItems.map((item) => item.id));

  return{

    products,
    isAnimating,
    setIsAnimating,
    // actualProductList,
    addProductToFavList,
    deleteProductFromFav,
    favItems,
    setFavItems,
    // currentPage,
    // numberPerPage,
    // produtsPerPage,
    // setCurrentSlider,
    // setCurrentPage,
    // firstIndex,
    // lastIndex,
    // neededPages,
    // actualSlider,
    // currentSlider,
    // AllNumbers,
    // nums,
    // setNums,
    // setNeededPages,
    // needed,
  }
}


export default useProduct;