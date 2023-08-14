import React, { useContext, useEffect, useState } from 'react';
import './scss/dropdown.scss';
import { RootContext } from '../App';
import api from '@api';
import { Modal, message } from 'antd';

import { Link } from 'react-router-dom';
import actions from '../stores/actions';

message.config({
    top: 120,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
});
export default function DropDown() {
    const { cartStore, userStore, cartActions, dispatch, localCartState, setLocalCartState } =
        useContext(RootContext);
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        if (cartStore.data) {
            setCartItems(cartStore.data.cart_details);
        }
    }, [cartStore.data]);

    function deleteItem(id, type = undefined) {
        if (!localStorage.getItem("token")) {
            if (localStorage.getItem("carts")) {
                let carts = JSON.parse(localStorage.getItem("carts"));
                carts = carts.filter(item => item.product_id != id);
                localStorage.setItem("carts", JSON.stringify(carts)); // save
                setLocalCartState(!localCartState) // reload ui
            }
            return
        }
        api.purchase
            .updateCart(userStore.data?.id, {
                type,
                cart_detail_record_edited: {
                    id,
                },
            })
            .then((res) => {
                // gọi hàm kéo cart detail về lại!
                api.purchase
                    .findCart(userStore.data?.id)
                    .then((res) => {
                        if (res.status == 200) {
                            dispatch(actions.cartActions.setCartData(res.data.data))
                        } else {
                            alert(res.data.message);
                        }
                    })
                    .catch((err) => {
                        alert("sập!");
                    });
            })
            .catch((err) => { });
    }

    function updateCart(e, item) {
        // 1 update, 0 delete
        /* req.body = {type, cart_detail_record_edited} */
        let quantityEl = e.target.parentNode.querySelector(".quantity");
        let quantity = Number(quantityEl.innerText);

        if (!localStorage.getItem("token")) {
            if (localStorage.getItem("carts")) {
                let carts = JSON.parse(localStorage.getItem("carts"));
                if (e.target.innerText == "-") {
                    for (let i in carts) {
                        if (carts[i].product_id == item.product_id) {
                            if (quantity == 1) {
                                carts.splice(i, 1);
                            } else {
                                carts[i].quantity -= 1;
                            }
                        }
                        localStorage.setItem("carts", JSON.stringify(carts)); // save
                    }
                } else {
                    carts = carts.map(itemMap => {
                        if (itemMap.product_id == item.product_id) {
                            itemMap.quantity += 1;
                        }
                        return itemMap
                    })
                    localStorage.setItem("carts", JSON.stringify(carts)); // save
                }
                setLocalCartState(!localCartState) // reload ui
            }
            return
        }
        if (e.target.innerText == "-") {
            if (quantity == 1) {
                if (window.confirm("Xóa ok?!")) {
                    // xóa
                    deleteItem(item.id, 0);
                }
            }
            // cập nhật -
            api.purchase
                .updateCart(userStore.data?.id, {
                    type: 1,
                    cart_detail_record_edited: {
                        id: item.id,
                        quantity: --quantity,
                    },
                })
                .then((res) => {
                    // gọi hàm kéo cart detail về lại!
                    api.purchase
                        .findCart(userStore.data?.id)
                        .then((res) => {
                            if (res.status == 200) {
                                dispatch(actions.cartActions.setCartData(res.data.data))
                            } else {
                                alert(res.data.message);
                            }
                        })
                        .catch((err) => {
                            alert("sập!");
                        });
                })
                .catch((err) => { });
        } else {
            // cập nhật +
            api.purchase
                .updateCart(userStore.data?.id, {
                    type: 1,
                    cart_detail_record_edited: {
                        id: item.id,
                        quantity: ++quantity,
                    },
                })
                .then((res) => {
                    // gọi hàm kéo cart detail về lại!
                    api.purchase
                        .findCart(userStore.data?.id)
                        .then((res) => {
                            if (res.status == 200) {
                                dispatch(actions.cartActions.setCartData(res.data.data))
                            } else {
                                alert(res.data.message);
                            }
                        })
                        .catch((err) => {

                            alert("sập!");
                        });
                })
                .catch((err) => { });
        }
    }

    async function generateDataCart() {
        let carts = JSON.parse(localStorage.getItem("carts"));
        for (let i in carts) {
            carts[i].product = await api.products.findProductById(carts[i].product_id).then(res => res.data.data);
        }
        setCartItems(carts);
        console.log("carts", carts)
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            if (localStorage.getItem("carts")) {
                generateDataCart();
            }
        }
    }, [localCartState])
    return (
        <div>
            {cartItems?.map((item, index) => (
                <div className="product">
                    <Link to={`/products/${item.product.id}`}>
                        <img
                            src={item.product.avatar}
                            alt={item.product.name}
                            className="product-image"
                        />
                    </Link>
                    <div className="product-details">
                        <p className="product-name">{item.product.name}</p>
                        <p className="product-price">${item.product.product_options[0].price}</p>
                    </div>
                    <div className="product-controls">
                        <a className="control-button" onClick={(e) => {
                            updateCart(e, item);
                        }}>-</a>
                        <span className="quantity">{item.quantity}</span>
                        <a className="control-button" onClick={(e) => {
                            updateCart(e, item);
                        }}>+</a>
                        <a className="delete-button" onClick={() => {
                            Modal.warning({
                                content: "Do you want to delete this product?",
                                onOk: () => {
                                    deleteItem(item.id == undefined ? item.product_id : item.id, 0);
                                }
                            })
                        }}><i className="fa fa-trash"></i></a>
                    </div>
                </div>
            ))}
        </div>

    );
}

