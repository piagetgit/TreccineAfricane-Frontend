import React from 'react'
import { useContext } from 'react';
import { DetailsContext } from "./../store/DetailsContext";
import { Grid, Container, Row, Col, Card } from 'react-bootstrap'
//import "./Details.css";
import classes from "./Details.module.css";
function Details() {
    const { braid, setBraid } = useContext(DetailsContext);

    console.log(braid);
    /*return (
        <div className="detail">
            <div className="title">{braid.title}</div>
            <div className="allDetails">
                <div className="elements">
                    <img src={braid.image} alt={braid.title} />
                </div>
                <div className="elements">
                    <div className="description">
                        <p>{braid.description}</p>
                    </div>
                    <div className="price">
                        <p>{braid.price}</p>
                    </div>
                    <div className="makeTime">
                        <p>{braid.makeTime}</p>
                    </div>
                </div>

            </div>


        </div>
    )*/

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm>
                    <Card>
                        <Card.Img src={braid.image} alt="Card image" />
                        <Card.Img className={classes.image} src={braid.image} alt="Card image" />
                    </Card>
                </Col>
                <Col className={classes.details}>
                    <p className={classes.title}>{braid.title}</p>
                    <p className={classes.price}>Price: {braid.price} €</p>
                    <p className={classes.season}>Season: {braid.season} </p>
                    <p className={classes.makingTime}>Making Time:{braid.makingTime}</p>
                    <p className={classes.holdingTime}>Holding Time:{braid.holdingTime} </p>
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
/* Hello gerold */