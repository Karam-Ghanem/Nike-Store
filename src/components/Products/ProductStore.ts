import { create } from "zustand";
import type { Product } from "./Products Data/productsList";
import ProductsList from "./Products Data/productsList";
import type { Query } from "./ProductControls";
import  { type Archive } from "@/Admin/page/archive/archiveList";


interface ProductStore{
    products:Product[],
    archivedProducts:Archive[],
    Filteration:(query:Query)=>void,
    Searching:(textSearch:string)=>void,
    addProduct:(product:Product)=>void,
    // deleteProduct:(productID:string|Product)=>void,
    removeFromArchive:(productID:string)=>void;
    archiveProduct:(product:Product)=>void,
    editProduct:(productID:string,product:Product)=>void,
    applyDiscount:(on:string,percent:number)=>void;
    applyDiscountOnShoese:(productId:string,percent:number)=>void;
}


const useProductStore = create<ProductStore>(set=>({
    products:ProductsList,
    archivedProducts:[],
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
    // deleteProduct:(productID)=>set((store)=>({
    //     products:
    //     store.products.filter((product)=>product.id!==productID)
    // })),
    archiveProduct:(produc)=>set((store)=>(
        
        {
        products:store.products.map(p=>p.id===produc.id ? {...p,isArchived:true} : p),
        archivedProducts:[...store.archivedProducts,{product:{...produc},date:new Date()}]
        }
)),
removeFromArchive:(productID)=>set((store)=>({
    archivedProducts:[...store.archivedProducts.filter(arpr=>arpr.product.id!==productID)],
    products:store.products.map(p=>p.id===productID ? {...p,isArchived:false} : p),
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
            oldProductPrice:product.oldProductPrice,
            isDiscounted:product.isDiscounted,
            isArchived:product.isArchived,
            sizesAndQuantities:product.sizesAndQuantities.map(s=>s)
        }
         :
          prod)
    })),

    applyDiscount:(on,percent)=>set((store)=>(
        on!='All' ? 
        {
        products:
        store.products.map(product=>(product.category==on || product.gender==on) ? {
        ...product,
        isDiscounted:true,
        oldProductPrice:product.productPrice,
        productPrice: (
          parseFloat(product.productPrice) -
          (percent * parseFloat(product.productPrice) / 100)
        )
        .toString()+'$'
        }
    : { ...product } )
         }
        :
        {
          products:store.products.map(product=>({...product,oldProductPrice:product.productPrice,isDiscounted:true,productPrice:(
          parseFloat(product.productPrice) -
          (percent * parseFloat(product.productPrice) / 100)
        )
        .toString()+' $'}))
        }
        )
        ),
        applyDiscountOnShoese:(productID,percent)=>set((store)=>(        {
        products:
        store.products.map(product=>(product.id===productID) ? {
        ...product,
        isDiscounted:true,
        oldProductPrice:product.productPrice,
        productPrice: (
          parseFloat(product.productPrice) -
          (percent * parseFloat(product.productPrice) / 100)
        )
        .toString()+'$'
        }
    : { ...product } )
         })),
        }
        


))

export default useProductStore;
