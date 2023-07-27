// import { Counter } from './features/counter/Counter';
import * as React from "react";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Provider } from 'react-redux';
import { store } from "./app/store.jsx"


import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkoutpage from "./pages/Checkoutpage";
import ProductdetailPage from "./pages/ProductdetailPage";
import Protected from "./features/auth/components/Protected";

//routing

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Protected><HomePage/></Protected>,
  },
  {
    path: "/login",
    element:  <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element:  <Protected> <CartPage/> </Protected>,
  },
  {
    path: "/checkout",
    element: <Protected> <Checkoutpage/> </Protected> ,
  },
  {
    path: "/productdetails/:id",
    element: <Protected> <ProductdetailPage/> </Protected>,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
