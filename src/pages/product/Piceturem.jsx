import React from 'react';
import Flickity from 'react-flickity-component';

export default function ProductThumbnails({ productStore }) {
    const flickityOptions = {
        cellAlign: 'left',
        wrapAround: false,
        autoPlay: false,
        prevNextButtons: true,
        asNavFor: '.product-gallery-slider',
        percentPosition: true,
        imagesLoaded: true,
        pageDots: false,
        rightToLeft: false,
        contain: true
    };

    return (
        <Flickity
            className="product-thumbnails thumbnails slider row row-small row-slider slider-nav-small small-columns-4"
            options={flickityOptions}
        >
            {productStore?.data?.product_options[0]?.product_option_pictures.map((picture, index) => (
                <div className={`col is-nav-selected first`} key={index}>
                    <a>
                        <img
                            src={picture.url}
                            alt={`Thumbnail ${index}`}
                            width={247}
                            height={296}
                            className="attachment-woocommerce_thumbnail"
                        />
                    </a>
                </div>
            ))}
        </Flickity>
    );
}
