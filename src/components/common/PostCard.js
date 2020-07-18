import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { Card, Button } from "react-bootstrap";
import Img from "gatsby-image";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    console.log(post);
    return (
        <Link to={url} className="post-card">
            <Card
                style={{ width: "300px", height: "400px" }}
                className="shadow-lg bg-dark Carta"
            >
                {post.feature_image && (
                    <div className="position-absolute w-100 h-100">
                        <Card.Img
                            src={post.feature_image}
                            className="position-absolute img-fluid h-100 imgCard"
                        />
                    </div>
                )}
                <Card.Body
                    className="bg-white position-absolute bodyCard"
                    style={{ fontFamily: "Poppins" }}
                >
                    <Card.Text className="cardDate mb-3">
                        Fecha 25/25/25
                    </Card.Text>
                    <Card.Text className="d-none">
                        {post.tags && (
                            <div>
                                <Tags
                                    post={post}
                                    visibility="public"
                                    autolink={false}
                                />
                            </div>
                        )}
                    </Card.Text>
                    <Card.Title className=" text-capitalize mb-4">
                        {post.title}
                    </Card.Title>
                    <Card.Text className="text-justify bodyText">
                        {post.excerpt}
                    </Card.Text>
                    {post.primary_author.profile_image && (
                        <img
                            src={post.primary_author.profile_image}
                            style={{ width: "50px" }}
                            alt="nada"
                        />
                    )}
                    <span>{post.primary_author.name}</span>
                </Card.Body>
            </Card>
        </Link>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default PostCard;
