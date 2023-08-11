import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from 'antd';


const addToCart = createAsyncThunk("/addToCart", async ({ userId, product }) => {
    let result = await axios.post(`${process.env.REACT_APP_SERVER_HOST_API}/purchase/` + userId, product,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    )
    return result.data;
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        loading: true,
        data: null
    },
    reducers: {
        changeLoad: (state, action) => {
            return {
                ...state,
                load: !state.load,
            };
        },
        setCartData: (state, action) => {
            state.data = { ...action.payload }
        },
        deleteProductFromCart: (state, action) => {
            const updatedCart = state.data.cart_details.filter((item) => {
                return item.id !== action.payload
            })
            state.data.cart_details = updatedCart
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(find.fulfilled, (state, action) => {
        //   state.data = [...action.payload.data];
        // });

        // add to cart
        builder.addCase(addToCart.fulfilled, (state, action) => {
            message.success("Add To Cart Successfully")
            state.data = { ...action.payload.data }
        });
        builder.addMatcher(
            (action) => {
                if (action.meta) {
                    return action;
                }
            },
            (state, action) => {
                if (action.meta) {
                    if (action.meta.requestStatus == "pending") {
                        //console.log("đã vào pending của api: ", action.type)
                        // if (action.type == "deleteUserByid/pending") {
                        //     console.log("trường hợp pending của api delete")
                        // }
                        state.loading = true;
                    }
                    if (action.meta.requestStatus == "rejected") {
                        //console.log("đã vào rejected của api: ", action.type)
                        state.loading = false;
                    }
                    if (action.meta.requestStatus == "fulfilled") {
                        //console.log("đã vào fulfilled của api: ", action.type)
                        state.loading = false;
                    }
                }
            },
        );
    },
});

export const cartActions = {
    ...cartSlice.actions,
    addToCart,
};

export const cartReducer = cartSlice.reducer;
