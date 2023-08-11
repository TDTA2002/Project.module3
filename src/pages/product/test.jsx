import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../stores/slices/product';
import "./scss/detail.scss"
import { convertToUSD } from '@mieuteacher/meomeojs';

export default function test() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(productActions.findProductById(id))
    }, [id])

    console.log("productStore", productStore)

    return (
        <div>
            <div className="Container">
                <div className="ContainerDetail" >
                    <div className="slider" style={{ width: "100%", height: "auto", maxWidth: "100%" }}>
                        <Carousel className='slider1' >
                            {
                                productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => (
                                    <Carousel.Item key={index}  >
                                        <img className="d-block w-100" alt={`Image ${index}`} src={picture.url} />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className="DetailItem">
                        <div className="content">
                            <h1 style={{ marginTop: "40px" }}>{productStore?.data?.name}</h1>
                            <div>
                                <h6>Released: {productStore?.data?.release}</h6>
                                <h6>Platforms: {productStore?.data?.platforms}</h6>
                                <h6>Main Genre: {productStore?.data?.type}</h6>
                                <h6>Developers: {productStore?.data?.developers}</h6>
                            </div>
                            <p>Amount of play: {productStore?.data?.rating} </p>
                            <div className="quantityCart">
                                <h5>Price: {convertToUSD(productStore?.data?.price)} </h5>
                                <div className="quantity" style={{ margin: "20px" }}>
                                </div>
                                <div>
                                    <button
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
