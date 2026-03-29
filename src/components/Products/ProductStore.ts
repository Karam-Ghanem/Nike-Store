import { create } from "zustand";
import type { Product } from "./Products Data/productsList";
import ProductsList from "./Products Data/productsList";
import type { Query } from "./ProductControls";

interface ProductStore {
  products: Product[];           // كل المنتجات الأصلية
  filteredProducts: Product[];   // المنتجات بعد الفلترة
  Filteration: (query: Query) => void;
  Searching: (textSearch: string) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: ProductsList,
  filteredProducts: ProductsList,   // بالبداية نفس الأصلية

Filteration: (query) =>
  set(() => {
    let result = ProductsList;

    // فلترة حسب الكاتيجوري
    if (query.selectedCategory) {
      result = result.filter(
        (prod) => prod.category === query.selectedCategory
      );
    }

    // فلترة حسب الجندر
    if (query.selectedGender) {
      result = result.filter(
        (prod) => prod.gender === query.selectedGender
      );
    }

    return {
      filteredProducts: result
    };
  }),


  Searching: (searchText) =>
    set(() => {
      let result = ProductsList;

      if (searchText !== "") {
        if (isNaN(parseFloat(searchText))) {
          result = ProductsList.filter((product) =>
            product.productName.includes(
              `${searchText[0].toUpperCase()}${searchText.slice(1)}`
            )
          );
        } else {
          result = ProductsList.filter(
            (product) => product.productPrice === `${searchText}$`
          );
        }
      }

      return { filteredProducts: result };
    }),
}));

export default useProductStore;
