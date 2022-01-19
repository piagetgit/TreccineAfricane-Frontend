import React from 'react'
import { useContext } from 'react';
import { DetailsContext } from "./../store/DetailsContext";
import { Container, Row, Col, Card } from 'react-bootstrap'

import classes from "./Details.module.css";

function Details() {
    const { setWhatsAppMessage, braid } = useContext(DetailsContext);
    setWhatsAppMessage(braid);
    console.log(braid);
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm>
                    <Card>
                        <Card.Img className={classes.image} src={braid.image} alt="Card image" />
                    </Card>
                </Col>
                <Col className={classes.details}>
                    <p className={classes.title}>{braid.title}</p>
                    <p className={classes.description}>{braid.description}</p>
                    <Row className="row mt-5">
                        <Col>
                            <p className={classes.price}>Price: {braid.price} €</p>
                        </Col>
                        <Col>
                            <p className={classes.season}>Ideal for: {braid.season} </p>
                        </Col>
                    </Row>
                    <Row className="row mt-5">
                        <Col>
                            <p className={classes.makingTime}>Making Time:{braid.makingTime}</p>
                        </Col>
                        <Col>
                            <p className={classes.holdingTime}>Holding Time:{braid.holdingTime} </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Details
