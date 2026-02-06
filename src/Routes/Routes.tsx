import About from "@/components/About/About";
import Products from "@/components/Products/Products";
import SingleProduct from "@/components/Products/SingleProduct";
import Review from "@/components/Review/Review";
import Services from "@/components/Services/Services";
import Cart from "@/Pages/Cart/Cart";
import Favorites from "@/Pages/Favorites/Favorites";
import HomePage from "@/Pages/HomePage";
import Layout from "@/Pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "review", element: <Review /> },
      { path: "services", element: <Services /> },
      { path: "products", element: <Products homePage={false} /> },
      { path: "product/:id/:category", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

export default router;
