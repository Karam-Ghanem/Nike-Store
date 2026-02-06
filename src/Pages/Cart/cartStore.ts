import { create } from 'zustand'
import type { Product } from '@/components/Products/productsList';

interface cartStore{
    cartItems:Product [];
    addProductToCart:(product:Product)=>void;
    deleteProductFromCart:(productID:string)=>void;
    setCartItems:(productID:string,newQuantityValue:number)=>void;
}
const useCartStore =create<cartStore>(set=>({
    cartItems:[],
    addProductToCart:(product)=>set((store)=>({
        cartItems:[...store.cartItems,product]
    })),
    deleteProductFromCart:(productID)=>set((store)=>({
        cartItems:store.cartItems.filter((prod)=>prod.id!=productID)
    })),
    setCartItems:(productID,newQuantityValue)=>set((store)=>({
        cartItems:[...store.cartItems.map((product)=>{if(product.id===productID)product.quantity=newQuantityValue; return product})]
    }))
}))

export default useCartStore;