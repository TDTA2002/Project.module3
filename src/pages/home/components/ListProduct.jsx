import React from 'react'
import img1 from "../../../images/MonsGeek-M1-QMK-banner-735x285-1.jpg"
import img2 from "../../../images/Demon_Slayer_AKKO.jpg"
import img3 from "../../../images/akko-cs-switch-725x385-1.jpg"

export default function ListProduct() {
    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                                <img
                                    src={img1}
                                    className="w-100"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                                    >
                                    </div>
                                    <div className="hover-overlay">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                                <img
                                    src={img2}
                                    className="w-100"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                                    >

                                    </div>
                                    <div className="hover-overlay">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                                <img
                                    src={img3}
                                    className="w-100"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                                    >
                                    </div>
                                    <div className="hover-overlay">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
