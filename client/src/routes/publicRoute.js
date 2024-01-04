import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layouts from "../components/Layouts/Layouts";
import NavBar from "../components/NavBar/NavBar";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";
import Wish from "../pages/WishPage/Wish";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

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
        path: "admin",
        element: <Admin />
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
        element: <Admin />
      }
    ]
  }
]);

export default publicRoute;
