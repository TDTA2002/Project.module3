import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../stores/slices/product';
import { RootContext } from '../../App';
import actions from '../../stores/actions';
import Picture from './Picture';
import ProductThumbnails from './Piceturem';


export default function Detail() {


    function addToCart(userId, product) {
        dispatch(actions.cartActions.addToCart({ userId, product }))
    }


    const { userStore } = useContext(RootContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(productActions.findProductById(id))
    }, [id])


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
                            Bàn phím cơ AKKO 3108 RF World Tour Tokyo (Dual-mode / AKKO sw v3)
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
                            <button className='add_to_cart_btn' onClick={() => addToCart(userStore?.data?.id, {
                                product_id: productStore?.data?.id,
                                quantity: 1
                            })}>Add to cart</button>

                        </form>
                        <div className="product_meta">
                            {" "}
                            <span className="posted_in">
                                {productStore?.data?.des}
                            </span>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}
