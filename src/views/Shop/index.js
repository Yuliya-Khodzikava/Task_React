import React, { Component } from 'react';

import './Shop.scss';

class Shop extends Component {
    render() {
        return (
            <div className="c-shop container" id="shop">
                <div className="row">
                    <div className="c-shop_item cols col-4">
                        <img src="c-shop_pic-1.png" alt="image1" />
                        <img src="c-shop_pic-2.png" alt="image2" />
                        <img src="c-shop_pic-3.png" alt="image3" />
                    </div>
                    <div className="c-shop_item cols">
                        <img src="c-shop_pic-7.png" alt="image7" />
                        <img src="c-shop_pic-8.png" alt="image8" />
                    </div>
                    <div className="c-shop_item cols col-4">
                        <img src="c-shop_pic-4.png" alt="image4" />
                        <img src="c-shop_pic-5.png" alt="image5" />
                        <img src="c-shop_pic-6.png" alt="image6" />
                    </div>
                        <div className="c-shop__button">
                            <button>Discover the shop</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default Shop;