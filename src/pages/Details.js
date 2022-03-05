import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import classes from "./Details.module.css";
import firebase from "./../components/firebase/fireBaseConfig";
import FAQ from './FAQ';

const ref = firebase.firestore().collection('braids');

async function getBraid(setLoadedBraids,bradId,setText) {
    ref.where('id','==',Number(bradId))
    .onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setLoadedBraids(items[0]);
      let text ="https://wa.me/+393512301282?text=Ti contatto per il modello N°=" + items[0].id + ", " + items[0].title + ", " +
            + items[0].price + "€ Colore " + items[0].baseColor + ". Quando saresti disponibile  ?";
     setText(text);
     return items[0];
    });
  }

function Details() {
    const location = useLocation();
    const names=location.pathname.split("/");
    const [loadedBraid, setLoadedBraid] = useState([]);
    const [text, setText] = useState([]);
   

    useEffect(() => {
        getBraid(setLoadedBraid,names[2],setText);
      }, []);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm>
                    <Card>
                        <Card.Img className={classes.image} src={loadedBraid.urlImage} alt="Card image" />
                    </Card>
                </Col>
                <Col className={classes.details}>
                    <p className={classes.title}>{loadedBraid.title}</p>
                    <p className={classes.description}>{loadedBraid.description}</p>
                    <Row className="row mt-5">
                        <Col>
                            <p className={classes.price}>Price: {loadedBraid.price} €</p>
                        </Col>
                        <Col>
                            <p className={classes.season}>Ideal for: {loadedBraid.season} </p>
                        </Col>
                    </Row>
                    <Row className="row mt-5">
                        <Col>
                            <p className={classes.makingTime}>Making Time:{loadedBraid.makingTime}</p>
                        </Col>
                        <Col>
                            <p className={classes.holdingTime}>Holding Time:{loadedBraid.holdingTime} </p>
                        </Col>
                    </Row>

                    <Row className="row mt-5">
                        <div >
                            <a href={text} className={classes.button} target="blank" >Prenotare</a>
                        </div>
                    </Row>
                    <Row className="row mt-5" >

                        <div >
                            <a href='/FAQ' className={classes.button} >HAI UNA DOMANDA?</a>
                        </div>

                    </Row>
                    </Col>

            </Row>

        </Container>
    )
}

export default Details;
