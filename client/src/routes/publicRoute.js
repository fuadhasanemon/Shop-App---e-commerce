import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layouts from "../components/Layouts/Layouts";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";
import Wish from "../pages/WishPage/Wish";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Brand from "../components/Brands/Brand";
import Tags from "../components/Tags/Tags";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";

// create public route
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Shop />
      },
      {
        path: "/:slug",
        element: <SingleProduct />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "wish",
        element: <Wish />
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "product",
            element: <Products />
          },
          {
            path: "category",
            element: <Category />
          },
          {
            path: "tag",
            element: <Tags />
          },
          {
            path: "brand",
            element: <Brand />
          }
        ]
      }
    ]
  }
]);

export default publicRoute;
