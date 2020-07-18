import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import { Layout, Leyenda } from "../components/common";
import { MetaData } from "../components/common/meta";
import { Postpadding } from "../elements";
import html2 from "html2json";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost;

    const JSONSTART = html2.html2json(
        post.html.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );

    const found = JSONSTART.child.filter(
        (element) =>
            element.tag === "h1" ||
            element.tag === "h2" ||
            element.tag === "h3" ||
            element.tag === "h4" ||
            element.tag === "h5" ||
            element.tag === "h6"
    );

    console.log(JSONSTART);
    JSONSTART.child.map((ele) =>
        found.includes(ele)
            ? Object.defineProperties(ele, {
                  attr: {
                      value: {
                          id:
                              typeof ele.child[0] === "object"
                                  ? ele.child[0].child[0].text.replace(/ /g, "")
                                  : ele.child[0].text.replace(/ /g, ""),
                      },
                      writable: true,
                  },
              })
            : null
    );

    const HTMLEND = html2.json2html(JSONSTART);
    console.log(HTMLEND);

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet></Helmet>
            <Layout>
                <Container className="paddingInicial bg-white h-100">
                    <Postpadding>
                        <Row className="post-leyend ">
                            <Col className="">
                                <h1 className="text-uppercase text-center mb-5 display-2 font-weight-bold">
                                    {post.title}
                                </h1>
                                <p>{post.excerpt}</p>
                                <Leyenda leyenda={found} />
                            </Col>
                        </Row>
                    </Postpadding>

                    <Row className="mt-n5">
                        <Col>
                            <Postpadding>
                                <section className="load-external-scripts post-ful position-relative ">
                                    <div
                                        className="d-flex flex-column align-items-center"
                                        dangerouslySetInnerHTML={{
                                            __html: HTMLEND,
                                        }}
                                    />
                                </section>
                            </Postpadding>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
