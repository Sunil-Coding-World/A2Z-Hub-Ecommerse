import * as React from "react";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Provider, useDispatch, useSelector } from 'react-redux';
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
import { fetchItemsByUserIdAsync } from "./features/Cart/CartSlice";
import { useEffect } from 'react';
import { selectLoggedInuser } from "./features/auth/authSlice";

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
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInuser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  }, [dispatch, user]);

  // Return the main content of your application
  return (
    <RouterProvider router={router} />
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default AppWrapper;
