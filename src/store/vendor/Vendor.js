import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";
import './vendor.css'
import {PhoneIcon} from "../../assets/icons";
import Button from 'react-bootstrap/Button';

class Vendor extends Component {
    render() {
        return (
            <div className="main-card" style={{}}>
                <div className="header-card" style={{height : "76.5%" ,width : "379px" , backgroundColor : "darkmagenta"}}>
                    <h4 className="store-name">Global Store</h4>
                    <div className="store-rating">ReactStars</div>
                    <p className="store-adr">382 Adams Avenue Savage MD US, 20763</p>
                    <p className="store-name"> <PhoneIcon/>+240-925-1783</p>
                </div>
                <div className="footer-card">
                    <Button variant="danger" className="store-btn">Visit Store</Button>
                    <img src="https://www.whoa.in/download/styliest-om-image-for-profile-pic" alt="profile" className="store-img"/>
                </div>
            </div>
        );
}}

export default Vendor;