/* eslint-disable semi */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Navigation } from ".";
import config from "../../utils/siteConfig";
import { LayoutWrapper } from "../../elements";
import { Navbar, Fade, FadeProps } from "react-bootstrap";

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

    //Srcoll animation
    const [fade, setFade] = useState(false);

    typeof window !== "undefined" &&
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setFade(true) : setFade(false);
        });

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
            </Helmet>
            <LayoutWrapper>
                <Navbar
                    bg="primary"
                    className={`justify-content-between position-fixed px-5 py-4 w-100 ${
                        fade ? "sticky bg-white" : ""
                    }`}
                    style={{
                        transition: "0.6s",
                        fontFamily: "Poppins",
                        zIndex: "100",
                    }}
                >
                    <Navbar.Brand
                        href="#home"
                        className="position-relative font-weight-bold  text-uppercase letter"
                        bsPrefix={`navbar-brand titulo3 ${
                            fade ? "text-primary" : "text-white"
                        }`}
                    >
                        C&C
                    </Navbar.Brand>
                    <div>
                        <Navbar.Brand
                            href="#home"
                            className="letter font-500 mx-4"
                            bsPrefix={`navbar-brand titulo6 ${
                                fade ? "text-primary" : "text-white"
                            }`}
                        >
                            Autores
                        </Navbar.Brand>

                        <Navbar.Brand
                            href="https://urgosxd.herokuapp.com/ghost"
                            className="border redondo px-2 letter font-500 mx-4"
                            bsPrefix={`navbar-brand titulo6 ${
                                fade ? "text-primary" : "text-white"
                            }`}
                        >
                            Publicar
                        </Navbar.Brand>
                    </div>
                </Navbar>

                <main>{children}</main>
                <Navbar bg="light" className="justify-content-center d-none">
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
