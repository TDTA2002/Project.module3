import React from 'react'
import './scss/mouse.scss'


export default function Mouse() {
    return (
        <div>
            <section className="section-products">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="header">
                                <h3>Mouse</h3>
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Single Product */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-1" className="single-product">
                                <div className="part-1">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-shopping-cart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-expand" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="part-2">
                                    <h3 className="product-title">Here Product Title</h3>
                                    <h4 className="product-old-price">$79.99</h4>
                                    <h4 className="product-price">$49.99</h4>
                                </div>
                            </div>
                        </div>
                        {/* Single Product */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-2" className="single-product">
                                <div className="part-1">
                                    <span className="discount">15% off</span>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-shopping-cart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-expand" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="part-2">
                                    <h3 className="product-title">Here Product Title</h3>
                                    <h4 className="product-price">$49.99</h4>
                                </div>
                            </div>
                        </div>
                        {/* Single Product */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-3" className="single-product">
                                <div className="part-1">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-shopping-cart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-expand" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="part-2">
                                    <h3 className="product-title">Here Product Title</h3>
                                    <h4 className="product-old-price">$79.99</h4>
                                    <h4 className="product-price">$49.99</h4>
                                </div>
                            </div>
                        </div>
                        {/* Single Product */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-4" className="single-product">
                                <div className="part-1">
                                    <span className="new">new</span>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-shopping-cart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-expand" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="part-2">
                                    <h3 className="product-title">Here Product Title</h3>
                                    <h4 className="product-price">$49.99</h4>
                                </div>
                            </div>
                        </div>
                 
                    </div>
                </div>
            </section>

        </div>
    )
}
