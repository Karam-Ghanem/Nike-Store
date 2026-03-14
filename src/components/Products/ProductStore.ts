import { create } from "zustand";
import type { Product } from "./productsList";
import ProductsList from "./productsList";
import type { Query } from "./ProductControls";


interface ProductStore{
    products:Product[],
    Filteration:(query:Query)=>void,
    Searching:(textSearch:string)=>void,
}


const useProductStore = create<ProductStore>(set=>({
    products:ProductsList,
    Filteration:(query)=>set(()=>({
        products:
        query.selectedCategory && query.selectedGender ?
        ProductsList.filter(prod=>prod.category==query.selectedCategory && prod.gender==query.selectedGender)
        :
        query.selectedCategory ?
         ProductsList.filter(prod=>prod.category===query.selectedCategory)
        :
        query.selectedGender? 
        ProductsList.filter(prod=>prod.gender==query.selectedGender)
        :
        ProductsList
    })),
    Searching:(searchText)=>set(()=>({
        products:
        searchText !=="" ?
        isNaN(parseFloat(searchText)) ?
        ProductsList.filter((product)=>product.productName==searchText.trim())
        :
        ProductsList.filter(product=>product.productPrice===`${searchText}$`)
        :
        ProductsList
        
        
    }))





    
}))

export default useProductStore;