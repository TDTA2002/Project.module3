// import { configureStore } from "@reduxjs/toolkit";

// import { userReducer } from "./slices/user";
// import { categoryReducer } from "./slices/category";
// import { productReducer } from "./slices/product";
// const store = configureStore({
//   reducer: {
//     userStore: userReducer,
//     categoryStore: categoryReducer,
//     productStore: productReducer
//   },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user";

import { categoryReducer } from "./slices/category";

import { productReducer } from "./slices/product";

import { cartReducer } from "./slices/purchase";

import { receiptReducer } from "./slices/receipt";

const store = configureStore({
  reducer: {
    userStore: userReducer,
    categoryStore: categoryReducer,
    productStore: productReducer,
    cartStore: cartReducer,
    receiptStore: receiptReducer

  },
});

export default store;
