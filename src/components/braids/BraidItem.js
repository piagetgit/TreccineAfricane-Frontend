import classes from './BraidItem.module.css';

import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import Card from '../ui/Card';
import Details from '../../pages/Details';

import { DetailsContext } from "./../../store/DetailsContext";



function BraidItem(props) {
    const history = useHistory();
    const { braid, setBraid } = useContext(DetailsContext);
    function detailFunction(props) {
        setBraid(props);
        history.push("/details");
    };


    return <li className="list-inline-item">
        <Card >
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content} bg="#ff3300">
                <h3>{props.title}</h3>
                <p>{props.description}</p>

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