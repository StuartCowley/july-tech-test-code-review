import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
    if (!results.length) {
      return <p>No results</p>;
    } else {
      return (
        <div className="search-results">
          {results.map((image, index) => {
            return (
              <img className="search-results__image" src={image} alt="spaceImage" key={index} />
            )}
          )}
        </div>
      );
    }
  };

SearchResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResults;