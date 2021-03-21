import React, {Component} from 'react';
import "./SearchBar.css"
import {GridIcon, ListIcon} from "../../assets/icons";
class SearchBar extends Component {
    render() {
        return (
            <div className="ps-shopping__header" data-selected="true" data-label-id="0" data-metatip="true">
                <p>
                <strong>2</strong> Product(s) found.
                </p>
                <div className="ps-shopping__actions">
                    <select className="form-control" data-placeholder="Sort Items">
                    <option>Sort by latest</option>
                    <option>Sort by popularity</option>
                    <option>Sort by average rating</option>
                    <option>Sort by price: low to high</option>
                    <option>Sort by price: high to low</option>
                    </select>
                    <div className="ps-shopping__view">
                        <div className="view"><p >View</p></div>
                        <div style={{margin : "5px"}}><GridIcon/></div>
                        <div style={{margin : "5px"}}><ListIcon/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;