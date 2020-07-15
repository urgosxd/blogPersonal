import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Pagination } from "react-bootstrap";

export const Pages = ({ pageContext }) => {
    const {
        previousPagePath,
        nextPagePath,
        humanPageNumber,
        numberOfPages,
    } = pageContext;

    return (
        <Pagination size="lg" className="d-flex justify-content-center">
            <Link to={previousPagePath}>
                <Pagination.Prev />
            </Link>

            <Link to={nextPagePath}>
                <Pagination.Next />
            </Link>
        </Pagination>
    );
};

Pages.propTypes = {
    pageContext: PropTypes.object.isRequired,
};
