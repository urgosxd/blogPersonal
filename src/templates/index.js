import React from "react";
import PropTypes from "prop-types";
import { graphq, Link } from "gatsby";
import {
    Container,
    Row,
    Col,
    Card,
    CardColumns,
    Button,
} from "react-bootstrap";
import { Layout, PostCard, Pages } from "../components/common";
import { MetaData } from "../components/common/meta";

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

    console.log(location);
    console.log(pageContext);
    const THELAST = posts[0];
    const url = `/${THELAST.node.slug}/`;
    const THELASTindex = posts.indexOf(THELAST);
    console.log(url);
    return (
        <>
            <MetaData location={location} />
            <Layout>
                <Container>
                    <Row className="mb-5">
                        <Col className="d-flex justify-content-center">
                            <Card className="text-center w-75">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Card.Img
                                                variant="top"
                                                src={THELAST.node.feature_image}
                                                className="img-fluid "
                                            />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Card.Body>
                                                <Card.Title>
                                                    {THELAST.node.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    {THELAST.node.excerpt}
                                                </Card.Text>
                                                <Link to={url}>
                                                    <Button variant="primary">
                                                        Leer mas
                                                    </Button>
                                                </Link>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <CardColumns>
                            {posts.map(({ node }, i) =>
                                i === THELASTindex ? null : (
                                    // The tag below includes the markup for each post - components/common/PostCard.js

                                    <PostCard key={node.id} post={node} />
                                )
                            )}
                        </CardColumns>
                    </Row>
                    <Row>
                        <Col>
                            <Pages pageContext={pageContext} />
                        </Col>
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
