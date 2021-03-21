import React from 'react';
import './style2.scss'
import Thumb from "../../thumb";
import {formatPrice} from '../../services/utils'
import ReactStars from "react-rating-stars-component";
const Product2 = () => {

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
            <a href="#" style={{position: "relative", left: "-4px", top: "-15px", transition: "none 0s ease 0s", cursor: "move"}}>STORE ITEM</a>

            <div className="shelf-item__price">
                <div className="val" style={{position: "relative", left: "-6px", top: "-24px",transition: "none 0s ease 0s", cursor: "move",}}>
                    <small>$</small>
                    <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                    <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                    <div className="val-rating" style={{position: "relative", left: "4px", top: "-16px", transition: "none 0s ease 0s", cursor: "move",}}>
                        <ReactStars {...{size: 30, value: 3, edit: false}} />
                    </div>
                </div>
            </div>
            <div className="shelf-item__buy-btn" style={{position: "relative", left: "1px", top: "-40px", transition: "none 0s ease 0s", cursor: "move"}}>Add to cart</div>
        </div>
    );
};


export default Product2;