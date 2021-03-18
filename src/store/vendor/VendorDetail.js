import React, {Component} from 'react';
import "./VendorDetail.css"
class VendorDetail extends Component {
    render() {
        return (
            <div className="ddd">
                <div className="section-left">
                    fd
                    <div className="block-vendor">
                        <div className="block-thumbnail">
                          <img src="http://wp.reactstorefronts.com/static/img/vendor/vendor-store.jpg" alt="vendor"/>
                        </div>
                        <div className="block-container">
                            <div className="header"><h4>global store</h4></div>
                            <div className="body"></div>
                            <div className="footer"></div>
                        </div>
                    </div>

                </div>
                <div className="section-right">
                    gf
                    <div className="block-vendor-shop">
                        <div className="block-container-vendor-shop">
                            <div className="header-shop"></div>
                            <div className="body-shop"></div>
                            <div className="footer-shop"></div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VendorDetail;