import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../_actions/posts.actions";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const PostList = () => {

    const dispatch = useDispatch();
    const post = useSelector(({ posts }) => posts.items);

    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch]);

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to="/">Home</Link>
                    </Col>
                    <Col>
            {post && post.map((obj) => (
                <Card style={{ width: '18rem' }} key={obj.id}>
                    <Card.Body>
                        <Card.Title>{obj.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            {obj.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostList;
