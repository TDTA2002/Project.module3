import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../stores/slices/product';

export default function ProductItem() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(productActions.findProductById(id))
    }, [id])

    console.log("productStore", productStore)

    return (
        <div className='productItem_container' style={{ display: "flex" }}>

            {
                productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => (
                    <div key={index}>
                        <img style={{ width: "500px" }} src={picture.url} alt="" />
                    </div>
                ))
            }

            <div className='productItem_infor'>
                <h3>{productStore?.data?.name}</h3>
                <div>{productStore?.data?.des}</div>
                <p>${productStore?.data?.product_options[0]?.price}</p>
                <button >Add to cart</button>
            </div>
        </div>
    )
}
