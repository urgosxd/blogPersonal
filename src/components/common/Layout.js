/* eslint-disable semi */
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Navigation } from ".";
import config from "../../utils/siteConfig";
import { LayoutWrapper } from "../../elements";
import { Navbar } from "react-bootstrap";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children }) => {
    const site = data.allGhostSettings.edges[0].node;
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
            </Helmet>
            <LayoutWrapper>
                <Navbar
                    bg="light"
                    className="justify-content-between px-5 mb-5"
                >
                    <div>
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                        <Navbar.Brand href="#home">Autores</Navbar.Brand>
                    </div>

                    <Navbar.Brand
                        href="https://urgosxd.herokuapp.com/ghost/"
                        className="border redondo px-2"
                    >
                        Publicar
                    </Navbar.Brand>
                </Navbar>
                <main>{children}</main>
                <Navbar bg="light" className="justify-content-center">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
            </LayoutWrapper>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
