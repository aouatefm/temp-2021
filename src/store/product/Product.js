import React from 'react';
import '../../style.scss'
import Thumb from "../../thumb";
import {formatPrice} from '../../services/utils'
import ReactStars from "react-rating-stars-component";
const Product = () => {

    let formattedPrice = formatPrice(85.35, "$");

    return (
        <div className="shelf-item"
            // onClick={() => addProduct(product)}
            >
            <div className="shelf-stopper">Free shipping</div>
            <Thumb
                classes="shelf-item__thumb"
                src="https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg"
                alt="gdfg"
            />
            <p className="shelf-item__title">Product Item</p>
            <a href="#">STORE ITEM</a>

            <div className="shelf-item__price">
                <div className="val">
                    <small>$</small>
                    <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                    <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                    <div className="val-rating"><ReactStars {...{size: 30, value: 3, edit: false}} /></div>
                </div>
            </div>
            <div className="shelf-item__buy-btn">Add to cart</div>


        </div>
    );
};


export default Product;