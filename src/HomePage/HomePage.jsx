import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import {Card, Col, Container, Navbar, Row} from "react-bootstrap";
import {fetchPhotos} from "../_actions/photos.actions";

const HomePage = () => {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const photo = useSelector(({ photos }) => photos.items);
    console.log('photo', photo)

    useEffect(() => {
        dispatch(userActions.getAll());
        dispatch(fetchPhotos());
    },[dispatch]);



    return (
        <div>
            <Navbar>
                <Link to="/posts">POSTS</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Здравствуйте: {user.firstName}
                        <p>
                            <Link to="/login">Выйти</Link>
                        </p>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Container>
                    <Row>
                        <Col>
                            {photo && photo.map((obj) => (
                                <Card style={{ width: '18rem' }} key={obj.id}>
                                    <Card.Img variant="top" src={obj.url} />
                                    <Card.Body>
                                        <Card.Title>{obj.title}</Card.Title>
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
        </div>

    );
}

export default  HomePage;
