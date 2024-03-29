import { RouterProvider } from "react-router-dom";
import publicRoute from "./routes/publicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllBrands,
  getAllCategories,
  getAllProducts,
  getAllTags
} from "./redux/shop/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllTags());
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);
  return <RouterProvider router={publicRoute} />;
}

export default App;
