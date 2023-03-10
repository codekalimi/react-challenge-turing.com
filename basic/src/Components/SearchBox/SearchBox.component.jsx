import React, {Component} from 'react';

import "./SearchBox.style.css";
class SearchBoxComponent extends Component {
    render() {
        const {onSearchHandler, placeholder}= this.props;
        return (
            <div>
                <input
                    type="search"
                    placeholder={placeholder}
                    className="search-box"
                    onChange={onSearchHandler}
                />
            </div>
        );
    }
}

export default SearchBoxComponent;