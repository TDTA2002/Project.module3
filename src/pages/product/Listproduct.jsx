import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../.././stores/slices/category';
import "./scss/listproduct.scss"

export default function ListProduct() {
    const dispatch = useDispatch();
    const { type } = useParams();
    useEffect(() => {
        if (type == "KeyBoard") {
            dispatch(categoryActions.findByCategory(1));
        }
        if (type == "key-kit") {
            dispatch(categoryActions.findByCategory(2));
        }
        if (type == "switch") {
            dispatch(categoryActions.findByCategory(3));
        }
    }, [type])

    const categoryStore = useSelector(store => store.categoryStore);

    return (

        <div>
            <section className="section-products">

                <div className="container" >
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="header">
                                <h3>Mouse</h3>
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ gap: "50px" }} >
                        {
                            categoryStore?.data?.map((product, index) => (
                                <Link to={`/products/${product.id}`} className="col-md-6 col-lg-4 col-xl-3" key={index} >
                                    <div id="product-2" className="single-product">
                                        <div className="part-1">
                                            <img style={{ height: "300px", width: "300px" }} src={product.avatar} alt="" />
                                            <span className="discount">15% off</span>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="part-2">
                                            <h3 className="product-title">{product.name}</h3>
                                            <h4 className="product-price">${product.product_options[0].price}</h4>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        }
                    </div>
                </div>

            </section>
        </div>
    )
}
