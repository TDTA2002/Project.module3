import React, { useContext, useState } from 'react';
import './scss/dropdown.scss';
import { RootContext } from '../App';
import api from '@api';
import { message } from 'antd';

import actions from '../stores/actions';
import { Link } from 'react-router-dom';


export default function DropDown({ product }) {

    const { dispatch, userStore } = useContext(RootContext);
    const [quantity, setQuantity] = useState(product.quantity)

    function handleDelete(product_id) {
        api.purchase.deleteProductFromCart(product_id)
            .then(res => {
                if (res.status == 200) {
                    dispatch(actions.cartActions.deleteProductFromCart(product_id))
                    message.success(res.data.message);
                } else {
                    message.error(res.data.message);
                }
            })
    }
    function updateCart(typeBtn) {

        if (typeBtn == "-") {
            if (quantity == 1) {
                if (confirm("Are you sure about that!")) {
                    api.purchase.updateCart(userStore?.data?.id, {
                        type: 0,
                        cart_detail_record_edited: {
                            id: product.id
                        }
                    }).then(res => {
                        api.purchase.findCart(userStore.data?.id)
                            .then(res => {
                                if (res.status == 200) {
                                    dispatch(actions.cartActions.setCartData(res.data?.data))
                                } else {
                                    alert('error')
                                }
                            }).catch(err => {
                                alert('sap !')
                            })
                    }).catch(err => {
                        alert('error!')
                    })
                } else {
                    return
                }
            }
            api.purchase.updateCart(userStore?.data?.id, {
                type: 1,
                cart_detail_record_edited: {
                    id: product.id,
                    quantity: quantity - 1
                }
            }).then(res => {
                api.purchase.findCart(userStore.data?.id)
                    .then(res => {
                        if (res.status == 200) {
                            dispatch(actions.cartActions.setCartData(res.data?.data))
                        } else {
                            alert('error')
                        }
                    }).catch(err => {
                        alert('sap !')
                    })
            }).catch(err => {
                alert('error!')
            })
        } else {
            api.purchase.updateCart(userStore?.data?.id, {
                type: 1,
                cart_detail_record_edited: {
                    id: product.id,
                    quantity: quantity + 1
                }
            }).then(res => {
                api.purchase.findCart(userStore.data?.id)
                    .then(res => {
                        if (res.status == 200) {
                            dispatch(actions.cartActions.setCartData(res.data?.data))
                        } else {
                            alert('error')
                        }
                    }).catch(err => {
                        alert('sap !')
                    })
            }).catch(err => {
                alert('error!')
            })
        }
    }


    return (
        <div className="product">
            <Link to={`/products/${product.product.id}`}>
                <img 
                    src={product.product.avatar}
                    alt={product.product.name}
                    className="product-image"
                />
            </Link>
            <div className="product-details">
                <p className="product-name">{product.product.name}</p>
                <p className="product-price">${product.product.product_options[0].price}</p>
            </div>
            <div className="product-controls">
                <a className="control-button" onClick={() => updateCart("-")}>-</a>
                <span className="quantity">{product.quantity}</span>
                <a className="control-button" onClick={() => updateCart("+")}>+</a>
                <a className="delete-button" onClick={() => handleDelete(product.id)}><i className="fa fa-trash"></i></a>
            </div>
        </div>
    );
}

