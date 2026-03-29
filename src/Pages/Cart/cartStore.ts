import { create } from 'zustand'
import type { Product } from '@/components/Products/Products Data/productsList';

export interface CatrtItem{
    product:Product;
    currentShoseSize:string;
    // id:string;
}

interface cartStore{
    cartItems:CatrtItem [];
    addProductToCart:(product:Product,currentShoseSize:string)=>void;
    deleteProductFromCart:(productID:string)=>void;
    setCartItems:(productID:string,newQuantityValue:number)=>void;
}
const useCartStore =create<cartStore>(set=>({
    cartItems:[],
    addProductToCart:(product,currentShoeseSize)=>set((store)=>({
        cartItems:[...store.cartItems,{product: product,currentShoseSize: currentShoeseSize}]
    })),
    deleteProductFromCart:(productID)=>set((store)=>({
        cartItems:store.cartItems.filter((prod)=>prod.product.id!=productID)
    })),
    setCartItems:(productID,newQuantityValue)=>set((store)=>({
        cartItems:[...store.cartItems.map((product)=>{if(product.product.id===productID)product.product.quantity=newQuantityValue; return product})]
    }))
}))

export default useCartStore;