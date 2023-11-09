import "./App.css";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { productsAndCartLoader } from "./components/loaders/ProductsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/order",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
