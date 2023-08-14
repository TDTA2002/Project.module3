import "./main.scss";
import { Routes } from "react-router-dom";
import { useEffect, createContext, useState } from 'react';

/* Route Config */
import AuthRoute from "@pages/auths/Route";
import HomeRoute from "@pages/home/Route";

import { useDispatch, useSelector } from 'react-redux';
import actions from './stores/actions';
import api from '@api';

/* Context Config */
export const RootContext = createContext();


function App() {
  const [localCartState, setLocalCartState] = useState(false);
  const store = useSelector(store => store)
  const dispatch = useDispatch();

  /* Gửi token lên server và lưu thông tin vào user store */
  useEffect(() => {
    dispatch(actions.userActions.authenToken())
  }, [])

  useEffect(() => {
    if (!store.userStore.data) {
      return
    }
    api.purchase.findCart(store.userStore.data?.id)
      .then(res => {
        if (res.status == 200) {
          dispatch(actions.cartActions.setCartData(res.data.data))
        } else {
          alert(res.data.message)
        }
      })
      .catch(err => {
        console.log("err", err)
        alert("sập!")
      })
  }, [store.userStore.data])

  useEffect(() => {
    if (!store.userStore.data) {
      return;
    }
    api.receipt
      .findReceipt(store.userStore.data?.id)
      .then((res) => {
        if (res.status == 200) {
          dispatch(
            actions.receiptActions.setReceiptData(res.data.data)
          );
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("sập!");
      });
  }, [store.userStore.data]);

  return (
    <RootContext.Provider value={
      {
        userStore: store.userStore,
        cartStore: store.cartStore,
        receiptStore: store.receiptStore,
        productStore: store.productStore,
        productActions: actions.productActions,
        dispatch,
        localCartState,
        setLocalCartState
      }
    }>
      <Routes>
        {/* Auth Routing */}
        {AuthRoute}
        {/* Home */}
        {HomeRoute}
        {/* Admin */}
        {/* {AdminRoute} */}
      </Routes>
    </RootContext.Provider>
  );
}

export default App;
