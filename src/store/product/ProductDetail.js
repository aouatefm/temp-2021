import React, {Component} from 'react';
import './ProductDetail.css'
import {Tab, Tabs} from "react-bootstrap";

class ProductDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg" alt="fff"/>
                    </div>
                    <div className="col right-section">
                        <h1>Product name</h1>
                        <div className="product-meta" style={{display :"flex"}}>
                            <div className="product-brand" >
                                <p>Brand : <a href="#">Sony</a></p>
                            </div>
                            <div className="product-brand">
                                <span className="span-rating">0 Rating(s)</span>
                            </div>
                        </div>
                        <div className="product-meta"  >
                        <p className="product-price"> <span>$</span>299</p>
                        <div className="product-brand">
                            <p>Sold By : <a href="#">Store Name</a></p>
                        </div>

                        <div className="product-desc">
                           <p>I'm baby adaptogen selvage flannel ugh. Quinoa art party YOLO kombucha. Jianbing fam YOLO vape salvia fashion axe everyday carry schlitz viral craft beer farm-to-table lyft tbh. Lo-fi hammock pickled raw denim, drinking vinegar before they sold out quinoa. Poutine fixie biodiesel, la croix shaman banh mi edison bulb narwhal squid.</p>
                        </div>
                        </div>
                        <div className="product-meta" style={{display :"flex", padding :"15px"}}>
                            <input type="number" className="form-control-product mr-1 w-25 form-control" defaultValue={1} min={1} w-25/>
                            <button type="button" className="btn btn-dark btn-product">Add To Cart</button>
                            <button type="button" className="btn btn-warning btn-product">Buy Now</button>

                        </div>
                        <div className="">
                            <span><strong>SKU :</strong>SF1133569600-1</span><br/>
                            <span><strong>Category :</strong>clothes</span>
                        </div>

                    </div>
                </div>
                <div className="">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="Description" title="Description">
                            <div>Tofu man braid ugh succulents, waistcoat tumblr iceland</div>
                        </Tab>
                        <Tab eventKey="Specification" title="Specification">
                            <p> belly. XOXO direct trade locavore hammock kogi cronut occupy 3 wolf</p>
                        </Tab>
                        <Tab eventKey="Vendor" title="Vendor" >
                            <p> braid. sssssssssssssXOXO direct trade locavore hammock kogi cronut occupy 3 wolf</p>
                        </Tab>
                        <Tab eventKey="Reviews" title="Reviews (1)" >
                            <p>mlzepflpz qlpfm lpzlczp pfelpe</p>
                        </Tab>
                        <Tab eventKey="PProducts" title="More Products" >
                            <p> mpa,dc ezko dokzokd??</p>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default ProductDetail;