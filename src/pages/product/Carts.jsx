import React from 'react'
import { useEffect, useContext, useState } from 'react';
import { RootContext } from '../../App';
import { Link } from 'react-router-dom';
import { randomId } from '@mieuteacher/meomeojs';
export default function Carts() {


    const { cartStore, dispatch, userStore } = useContext(RootContext);

    const [cartItems, setCartItems] = useState(null);

    // console.log("cartItems", cartItems)

    const totalCart = cartStore?.data?.cart_details?.reduce((total, product) => {
        return total + product.quantity
    }, 0);

    useEffect(() => {
        if (cartStore.data) {
            setCartItems(cartStore.data.cart_details)
        }
    }, [cartStore.data])

    return (
        <div>
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Home / Checkout</h6>
                </div>
            </div>

            <div className='py-4'>
                <div className='container' style={{ display: "flex" }}>
                    <div className='row'>

                        <div className='col-md-7'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Basic Information</h4>
                                </div>
                                <div className='card-body'>


                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">First Name</label>
                                                <input type="text" name='' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Last Name</label>
                                                <input type="text" name='' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Phone Number</label>
                                                <input type="text" name='' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Email Address</label>
                                                <input type="text" name='' className='form-control' />
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Full Address</label>
                                                <input type="text" name='' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group text-end'>
                                                <button type='button' className='btn btn-primary'>Place Order</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th style={{ width: "50%" }}>Product</th>
                                        <th>Price</th>
                                        <th>qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems?.map((product, index) => (
                                        <tr product={product} key={randomId()}>
                                            <td>{product.product.name}</td>
                                            <td>{product.product.price}</td>
                                            <td>400</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
