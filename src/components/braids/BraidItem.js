import classes from './BraidItem.module.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import Card from '../ui/Card';

import { DetailsContext } from "./../../store/DetailsContext";

function BraidItem(props) {
    const history = useHistory();
    const { setBraid } = useContext(DetailsContext);

    function detailFunction(props) {
        setBraid(props);
        console.log(props.id)
        history.push("/details/"+props.id);
    };

    return <li className="list-inline-item">
        <Card >
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content} bg="#ff3300">
                <h3>{props.title}</h3>
                <p>{props.price} €</p>


            </div>

            <div className={classes.actions}>
                <button onClick={() => detailFunction(props)}>Details</button>
            </div>
        </Card>
        <p></p>
        <p></p>
    </li>;
}

export default BraidItem;