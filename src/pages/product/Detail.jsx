// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { productActions } from '../../stores/slices/product';
// import "./scss/detail.scss"
// import { Carousel } from 'react-bootstrap';
// import { convertToUSD } from '@mieuteacher/meomeojs';

// export default function ProductItem() {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const productStore = useSelector(store => store.productStore);

//     useEffect(() => {
//         dispatch(productActions.findProductById(id))
//     }, [id])

//     console.log("productStore", productStore)

//     return (
//         <div>
//             <div className="Container">
//                 <div className="ContainerDetail" >
//                     <div className="slider" style={{ width: "500px", height: "auto", maxWidth: "100%" }}>
//                         <Carousel className='slider1' >
//                             {
//                                 productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => (
//                                     <Carousel.Item key={index}  >
//                                         <img style={{ width: "100%", height: "500px" }} alt={`Image ${index}`} src={picture.url} />
//                                     </Carousel.Item>
//                                 ))
//                             }
//                         </Carousel>
//                     </div>
//                     <div className="DetailItem">
//                         <div className="content">
//                             <h1 style={{ marginTop: "40px" }}>{productStore?.data?.name}</h1>
//                             <div>
//                                 <h6>Released: {productStore?.data?.release}</h6>
//                                 <h6>Platforms: {productStore?.data?.platforms}</h6>
//                                 <h6>Main Genre: {productStore?.data?.type}</h6>
//                                 <h6>Developers: {productStore?.data?.developers}</h6>
//                             </div>
//                             <p>Amount of play: {productStore?.data?.rating} </p>
//                             <div className="quantityCart">
//                                 <h5>Price: {convertToUSD(productStore?.data?.price)} </h5>
//                                 <div className="quantity" style={{ margin: "20px" }}>
//                                 </div>
//                                 <div>
//                                     <button
//                                     >
//                                         ADD TO CART
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../stores/slices/product';
import { RootContext } from '../../App';
import actions from '../../stores/actions';


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

 
    console.log("userStore",userStore);
    return (
        <div>
            <div className="col large-9">
                <div className="row">
                    <div className="large-6 col">
                        <div
                            className="product-images relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                            data-columns={4}
                        >
                            <div className="badge-container is-larger absolute left top z-1" />
                            <div className="image-tools absolute top show-on-hover right z-3" />



                            {/* {productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => ( */}
                            <div
                                className="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-small mb-half"
                                data-flickity-options='{ "cellAlign": "center", "wrapAround": true, "autoPlay": false, "prevNextButtons":true, "adaptiveHeight": true, "imagesLoaded": true, "lazyLoad": 1, "dragThreshold" : 15, "pageDots": false, "rightToLeft": false }'
                            >


                                <div className="woocommerce-product-gallery__image slide"
                                >
                                    <a >
                                        <img
                                            width={510}
                                            height={631}
                                            className="wp-post-image skip-lazy"
                                            loading="lazy"
                                            data-large_image_width={800}
                                            data-large_image_height={990}
                                            srcSet="https://akkogear.com.vn/wp-content/uploads/2023/07/ban-phim-co-akko-3108-rf-world-tour-tokyo-01-510x631.jpg"
                                            sizes="(max-width: 510px) 100vw, 510px"
                                        />
                                    </a>

                                </div>
                                <div className="woocommerce-product-gallery__image slide"
                                >
                                    <a >
                                        <img
                                            width={510}
                                            height={631}
                                            className="wp-post-image skip-lazy"
                                            loading="lazy"
                                            data-large_image_width={800}
                                            data-large_image_height={990}
                                            srcSet="https://akkogear.com.vn/wp-content/uploads/2023/07/ban-phim-co-akko-3108-rf-world-tour-tokyo-01-510x631.jpg"
                                            sizes="(max-width: 510px) 100vw, 510px"
                                        />
                                    </a>

                                </div>

                                {/* {productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => (
                                    <div className="woocommerce-product-gallery__image slide is-selected" key={index}>
                                        <a >
                                            <img
                                                width={510}
                                                height={631}
                                                className="wp-post-image skip-lazy"
                                                loading="lazy"
                                                data-large_image_width={800}
                                                data-large_image_height={990}
                                                srcSet="https://akkogear.com.vn/wp-content/uploads/2023/07/ban-phim-co-akko-3108-rf-world-tour-tokyo-01-510x631.jpg"
                                                sizes="(max-width: 510px) 100vw, 510px"
                                            />
                                        </a>
                                    </div>

                                ))} */}






                            </div>
                            {/* ))} */}
                        </div>
                        <div
                            className="product-thumbnails thumbnails slider row row-small row-slider slider-nav-small small-columns-4"
                            data-flickity-options='{ "cellAlign": "left", "wrapAround": false, "autoPlay": false, "prevNextButtons": true, "asNavFor": ".product-gallery-slider", "percentPosition": true, "imagesLoaded": true, "pageDots": false, "rightToLeft": false, "contain": true }'
                        >
                            <div className="col is-nav-selected first">
                                {" "}
                                <a>
                                    {" "}
                                    <img
                                        src="https://akkogear.com.vn/wp-content/uploads/2023/07/ban-phim-co-akko-3108-rf-world-tour-tokyo-01-247x296.jpg"
                                        alt=""
                                        width={247}
                                        height={296}
                                        className="attachment-woocommerce_thumbnail"
                                    />{" "}
                                </a>
                            </div>
                            <div className="col is-nav-selected first">
                                {" "}
                                <a>
                                    {" "}
                                    <img
                                        src="https://akkogear.com.vn/wp-content/uploads/2023/07/ban-phim-co-akko-3108-rf-world-tour-tokyo-01-247x296.jpg"
                                        alt=""
                                        width={247}
                                        height={296}
                                        className="attachment-woocommerce_thumbnail"
                                    />{" "}
                                </a>
                            </div>
                        </div>
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
                                    <bdi>
                                        1,899,000&nbsp;
                                        <span className="woocommerce-Price-currencySymbol">₫</span>
                                    </bdi>
                                </span>
                            </p>
                        </div>
                        <form
                            className="cart"
                        >
                            <div className="quantity buttons_added">
                                {" "}
                                <input
                                    type="button"
                                    defaultValue="-"
                                    className="minus button is-form"
                                />
                                <label
                                    className="screen-reader-text"
                                    htmlFor="quantity_64beaf48b4de8"
                                >
                                    Bàn phím cơ AKKO 3108 RF World Tour Tokyo (Dual-mode / AKKO sw v3)
                                    số lượng
                                </label>{" "}

                                <input
                                    type="button"
                                    defaultValue="+"
                                    className="plus button is-form"
                                />
                            </div>{" "}
                            <button className='add_to_cart_btn' onClick={() => addToCart(userStore?.data?.id, {
                                product_id: productStore?.data?.id,
                                quantity: 1
                            })}>Add to cart</button>
                           
                        </form>
                        <div className="product_meta">
                            {" "}
                            <span className="posted_in">
                                Danh mục:{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/phan-loai-switch/akko-switch-v3/"
                                    rel="tag"
                                >
                                    AKKO Switch v3
                                </a>
                                ,{" "}
                                <a href="https://akkogear.com.vn/danh-muc/ban-phim/" rel="tag">
                                    Bàn phím
                                </a>
                                ,{" "}
                                <a href="https://akkogear.com.vn/danh-muc/dong/" rel="tag">
                                    Dòng
                                </a>
                                ,{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/phan-loai-layout-akko/layout-fullsize/"
                                    rel="tag"
                                >
                                    Fullsize
                                </a>
                                ,{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/phan-loai-keycap/oem-profile/"
                                    rel="tag"
                                >
                                    OEM Profile
                                </a>
                                ,{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/phan-loai-keycap/pbt-dye-subbed/"
                                    rel="tag"
                                >
                                    PBT Dye-Subbed
                                </a>
                                ,{" "}
                                <a href="https://akkogear.com.vn/danh-muc/dong/rf-series/" rel="tag">
                                    RF series
                                </a>
                                ,{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/cau-truc-ban-phim/tray-mount/"
                                    rel="tag"
                                >
                                    Tray Mount
                                </a>
                                ,{" "}
                                <a href="https://akkogear.com.vn/danh-muc/dong/wireless/" rel="tag">
                                    Wireless
                                </a>
                                ,{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/dong/world-tour-tokyo/"
                                    rel="tag"
                                >
                                    World Tour Tokyo
                                </a>
                                ,{" "}
                                <a
                                    href="https://akkogear.com.vn/danh-muc/dong/world-tour-tokyo-r2/"
                                    rel="tag"
                                >
                                    World Tour Tokyo R2
                                </a>
                            </span>{" "}
                            <span className="tagged_as">
                                Từ khóa:{" "}
                                <a
                                    href="https://akkogear.com.vn/tu-khoa-san-pham/ban-phim-co-akko-3108-rf-world-tour-tokyo-dual-mode-akko-sw-v3/"
                                    rel="tag"
                                >
                                    Bàn phím cơ AKKO 3108 RF World Tour Tokyo (Dual-mode / AKKO sw v3)
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}
