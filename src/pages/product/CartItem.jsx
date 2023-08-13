import React from 'react'

export default function CartItem() {
    return (
        <div className="col-25">
            <div className="container">
                <h4>
                    Cart
                    <span className="price" style={{ color: "black" }}>
                        <i className="fa fa-shopping-cart" />
                        <b>{totalCart}</b>
                    </span>
                </h4>
                {cartItems?.map((product, index) => (
                    <p key={randomId}>
                        <a href="#"><img src={product.product.avatar} style={{ width: "75px", height: "75px" }} alt="" /></a> <span className="price">${convertToUSD(product.product.product_options[0].price) * quantity}</span>
                    </p>
                ))}
                <hr />
                <p>
                    Total{" "}
                    <span className="price" style={{ color: "black" }}>
                        <b>{convertToUSD(subTotal)}</b>
                    </span>
                </p>
            </div>
        </div>
    )
}
