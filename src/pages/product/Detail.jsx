import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RootContext } from '../../App';
import Picture from './Picture';
import ProductThumbnails from './Piceturem';
import api from '@api';
import actions from '../../stores/actions';
import { Modal } from 'antd';


export default function Detail() {


    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { userStore, productStore, dispatch, productActions, cartActions, setLocalCartState, localCartState } = useContext(RootContext);

    useEffect(() => {
        dispatch(productActions.findProductById(id));
    }, [id]);
    function addToCart() {
        let data = {
            product_id: productStore.data.id,
            quantity,
        };

        if (localStorage.getItem("token")) {
            api.purchase
                .addToCart(userStore.data.id, data)
                .then((res) => {
                    api.purchase.findCart(userStore.data?.id)
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
                })
                .catch((err) => {
                    console.log("err", err);
                    alert("looix");
                });
        } else {
            let carts = localStorage.getItem("carts");
            if (carts) {
                carts = JSON.parse(carts);
                let flag = false;
                carts = carts.map((item) => {
                    if (item.product_id == data.product_id) {
                        item.quantity += data.quantity;
                        flag = true;
                    }
                    return item;
                });
                if (!flag) {
                    carts.push(data);
                }
                localStorage.setItem("carts", JSON.stringify(carts)); // save
            } else {
                let cartTemp = [];
                cartTemp.push(data);
                localStorage.setItem("carts", JSON.stringify(cartTemp)); // save
            }
            setLocalCartState(!localCartState)
        }
    }


    return (
        <div>
            <div >
                <div className="row">
                    <div className="large-6 col">
                        <div
                            className="product-images relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                            data-columns={4}
                        >
                            <div className="badge-container is-larger absolute left top z-1" />
                            <div className="image-tools absolute top show-on-hover right z-3" />



                            <Picture productStore={productStore} />


                        </div>
                        <ProductThumbnails productStore={productStore} />
                    </div>
                    <div className="product-info summary entry-summary col col-fit product-summary">
                        <h1 className="product-title product_title entry-title">
                            {" "}
                            {productStore?.data?.name}
                        </h1>
                        <div className="price-wrapper">
                            <p className="price product-page-price ">
                                {" "}
                                <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">$</span>
                                    <bdi>
                                        {productStore?.data?.product_options[0].price}&nbsp;
                                    </bdi>
                                </span>
                            </p>
                        </div>
                        <form
                            className="cart"
                        >
                            <div className="quantity buttons_added">
                                {" "}

                                <label
                                    className="screen-reader-text"
                                    htmlFor="quantity_64beaf48b4de8"
                                >
                                    {productStore?.data?.name}
                                </label>{" "}


                            </div>{" "}


                        </form>
                        <div className="count_product">
                            <button
                                className="count"
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1);
                                    }
                                }}
                            >
                                <span className="material-symbols-outlined">-</span>
                            </button>

                            <span className="quantity" style={{ fontSize: "25px" }}>
                                {quantity}
                            </span>
                            <button
                                className="count"
                                onClick={() => {
                                    if (quantity > 0) {
                                        setQuantity(quantity + 1);
                                    }
                                }}
                            >
                                <span className="material-symbols-outlined">+</span>
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                addToCart();
                                Modal.success({
                                    content: "Register sucsses",
                                });
                            }}
                            type="submit"
                            className="addToCart"

                        >
                            Add To Cart
                        </button>
                        <div className="product_meta">
                            {" "}
                            <span className="posted_in">
                                Chi Tiết: {productStore?.data?.des}
                            </span>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}
