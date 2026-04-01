import { create } from 'zustand'
import type { Product } from '@/components/Products/Products Data/productsList';

export interface CatrtItem{
    product:Product;
    currentShoseSize:string;
    currentShoeseID:string;
}

interface cartStore{
    cartItems:CatrtItem [];
    addProductToCart:(product:Product,currentShoseSize:string,currentShoeseID:string)=>void;
    deleteProductFromCart:(currentShoeseID:string)=>void;
    setCartItems:(productID:string,newQuantityValue:number)=>void;
}
const useCartStore =create<cartStore>(set=>({
    cartItems:[],
    addProductToCart:(product,currentShoeseSize,currentShoeseID)=>set((store)=>({
        cartItems:[...store.cartItems,{product: product,currentShoseSize: currentShoeseSize,currentShoeseID:currentShoeseID}]
    })),
    deleteProductFromCart:(currentShoeseID)=>set((store)=>({
        cartItems:store.cartItems.filter((prod)=>prod.currentShoeseID!=currentShoeseID)
    })),
    setCartItems:(productID,newQuantityValue)=>set((store)=>({
        cartItems:[...store.cartItems.map((product)=>{if(product.product.id===productID)product.product.quantity=newQuantityValue; return product})]
    }))
}))

export default useCartStore;