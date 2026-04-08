import { create } from "zustand";
import type { Product } from "./Products Data/productsList";
import ProductsList from "./Products Data/productsList";
import type { Query } from "./ProductControls";


interface ProductStore{
    products:Product[],
    Filteration:(query:Query)=>void,
    Searching:(textSearch:string)=>void,
    addProduct:(product:Product)=>void,
    deleteProduct:(productID:string|Product)=>void,
    editProduct:(productID:string,product:Product)=>void,

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
        ProductsList.filter((product)=>product.productName.includes(`${searchText[0].toUpperCase()}${searchText.slice(1)}`))
        :
        ProductsList.filter(product=>product.productPrice===`${searchText}$`)
        :
        ProductsList
        
        
    })),
    addProduct:(product)=>set((store)=>({
        products:[...store.products,product]
    })),
    deleteProduct:(productID)=>set((store)=>({
        products:
        store.products.filter((product)=>product.id!==productID)
    })),
    editProduct:(productID,product)=>set((store)=>({
        products:
        store.products.map((prod)=>prod.id==productID ?
         {
            productName:product.productName,
            category:product.category,
            gender:product.gender,
            href:product.href,
            id:product.id,
            productDescription:product.productDescription,
            productImg:product.productImg,
            productPrice:product.productPrice,
            quantity:product.quantity,
            sizes:product.sizes
        }
         :
          prod)
    }))






    
}))

export default useProductStore;
