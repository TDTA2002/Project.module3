import React from 'react';
import Flickity from 'react-flickity-component';

export default function Picture({ productStore }) {
    const flickityOptions = {
        cellAlign: 'center',
        wrapAround: true,
        autoPlay: false,
        prevNextButtons: true,
        adaptiveHeight: true,
        imagesLoaded: true,
        lazyLoad: 1,
        dragThreshold: 15,
        pageDots: false,
        rightToLeft: false,
    };

    return (
        <div className="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-small mb-half">
            <Flickity options={flickityOptions}>
                {productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => (
                    <div className="woocommerce-product-gallery__image slide" key={index}>
                        <a>
                            <img
                                width={510}
                                height={631}
                                className="wp-post-image skip-lazy"
                                loading="lazy"
                                data-large_image_width={800}
                                data-large_image_height={990}
                                srcSet={picture.url}
                                sizes="(max-width: 510px) 100vw, 510px"
                                alt={`Image ${index}`}
                            />
                        </a>
                    </div>
                ))}
            </Flickity>
        </div>
    );
}
