import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphq, Link } from "gatsby";
import {
    Container,
    Row,
    Col,
    Card,
    CardColumns,
    Button,
    Carousel,
} from "react-bootstrap";
import { Layout, PostCard, Pages } from "../components/common";
import { MetaData } from "../components/common/meta";
import ItemsCarousel from "react-items-carousel";
import { LeftArrow, RightArrow } from "@styled-icons/boxicons-regular";

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges;

    const THELAST = posts[0];
    const url = `/${THELAST.node.slug}/`;
    const THELASTindex = posts.indexOf(THELAST);
    console.log(url);
    // jsCarrousel
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <>
            <MetaData location={location} />
            <Layout>
                <Container className="position-relative paddingInicial">
                    <Row style={{ marginBottom: "100px" }}>
                        <Col className="d-flex justify-content-center alturaBaner shadow-lg rounded">
                            <Card className="text-center w-100 h-100 ">
                                <Container>
                                    <Row>
                                        <Col xs={12}>
                                            <Card.Img
                                                variant="top"
                                                src={THELAST.node.feature_image}
                                                className="img-fluid w-75 hImg position-relative effectCard"
                                            />
                                        </Col>
                                        <Col
                                            xs={5}
                                            className="position-relative effectCardtxt shadow bg-white w-75 rounded"
                                        >
                                            <Card.Body
                                                className="text-left p-5"
                                                style={{
                                                    fontFamily: "Poppins",
                                                }}
                                            >
                                                <Card.Text>
                                                    {THELAST.node.primary_author
                                                        .profile_image && (
                                                        <img
                                                            src={
                                                                post
                                                                    .primary_author
                                                                    .profile_image
                                                            }
                                                            style={{
                                                                width: "50px",
                                                            }}
                                                            alt="nada"
                                                        />
                                                    )}
                                                </Card.Text>
                                                <Card.Text>
                                                    Fecha 25/25/25
                                                </Card.Text>
                                                <Card.Title className="text-uppercase text-primary font-weight-bold">
                                                    {THELAST.node.title}
                                                </Card.Title>
                                                <Card.Text className="MinExcerpt text-justify">
                                                    {THELAST.node.excerpt}
                                                </Card.Text>
                                                <div className="d-flex justify-content-between">
                                                    <Link to={url}>
                                                        <Button
                                                            variant="primary"
                                                            size="lg"
                                                        >
                                                            LEER
                                                        </Button>
                                                    </Link>
                                                    <Card.Text className="w-50">
                                                        <div></div>
                                                    </Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1
                                className="text-center text-white"
                                style={{ marginBottom: "100px" }}
                            >
                                Ultimos Posts Recientes
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    padding: "20px 40px",
                                    paddingLeft: "50px",
                                    background: "#000",
                                    borderRadius: "25px",
                                }}
                            >
                                <ItemsCarousel
                                    requestToChangeActive={setActiveItemIndex}
                                    activeItemIndex={activeItemIndex}
                                    numberOfCards={3}
                                    gutter={20}
                                    leftChevron={
                                        <button className="bg-dark rounded mr-5">
                                            <LeftArrow
                                                size="50px"
                                                color="white"
                                            />
                                        </button>
                                    }
                                    rightChevron={
                                        <button className="bg-dark rounded mr-5">
                                            <RightArrow
                                                size="50px"
                                                color="white"
                                            />
                                        </button>
                                    }
                                    outsideChevron
                                    chevronWidth={chevronWidth}
                                >
                                    {posts.map(({ node }, i) =>
                                        i === THELASTindex ? null : (
                                            <PostCard
                                                key={node.id}
                                                post={node}
                                            />
                                        )
                                    )}
                                </ItemsCarousel>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <LeftArrow />
                    </Row>
                </Container>
            </Layout>
        </>
    );
};

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`;
