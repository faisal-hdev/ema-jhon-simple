import "./App.css";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { productsAndCartLoader } from "./components/loaders/ProductsAndCartLoader";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./route/privateRoute";

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
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
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
