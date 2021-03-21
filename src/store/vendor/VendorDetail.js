import React, {Component} from 'react';
import "./VendorDetail.css"
import ReactStars from "react-rating-stars-component";
import ProductGrid2 from "../product/ProductGrid2";
import {FacebookIcon, InstagramIcon, PinterestIcon} from "../../assets/icons";
import SearchBar from "./SearchBar";

class VendorDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 left-side" style={{backgroundColor: "#F1F1F1"}}>
                        <div className="row">
                            <div className="col">
                                <img
                                src="https://static.booska-p.com/images/news_opti/1000/naruto-le-manga-le-plus-vendu-en-france-en-2020.jpg"
                                className="banner-image"/>
                            </div>
                            <div className="w-100"></div>
                            <div className="col">
                                <div className="ps-block__container">
                                    <div className="ps-block__header"><h4>Global Store</h4>
                                        <span className="ps-rating">
                    <div className="val-rating"><ReactStars {...{size: 25, value: 3, edit: false}} /></div>
                                        </span>
                                        <p data-metatip="true"><strong>85% Positive</strong> (562 rating)</p></div>
                                    <div className="ps-block__divider" data-selected="true" data-label-id="0"
                                         style={{borderTop: "solid 1px #D5D5D5"}}></div>
                                    <div className="ps-block__content" style={{marginTop: "15px"}}><p>
                                        <strong>Address:</strong> 382 Adams Avenue,
                                        Savage, MD, US,20763</p>
                                        <figure>
                                            <figcaption>Follow us on social</figcaption>
                                            <div style={{margin: "10px"}}>
                                                <span style={{margin: "10px"}}><FacebookIcon/></span>
                                                <span style={{margin: "10px"}}><InstagramIcon/></span>
                                                <span style={{margin: "10px"}}><PinterestIcon/></span>
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="ps-block__footer"><p>Call us directly <strong>+240-925-1783</strong>
                                    </p>
                                        <p>or Or if you have any question</p>
                                        <button type="button" className="btn btn-warning btn-contact">Contact Seller
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9" >
                        <SearchBar/>
                        <ProductGrid2/>
                    </div>
                </div>
            </div>
        );
    }
}

export default VendorDetail;