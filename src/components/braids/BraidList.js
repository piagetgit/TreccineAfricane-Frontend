import classes from './BraidList.module.css';
import BraidItem from './BraidItem';
import { Row, Col, Container } from 'react-bootstrap'

function BraidList(props) {
    //console.log(props);
    return (
        <Container>
            <h1 className={classes.logo}>{props.nameOfPage}</h1>
            <Row>
                {props.braids.map(braid =>
                    <Col className="col-sm-3">
                        <BraidItem key={braid.id}
                            id={braid.id}
                            image={braid.urlImage}
                            title={braid.title}
                            description={braid.description}
                            holdingTime={braid.holdingTime}
                            baseColor={braid.baseColor}
                            date={braid.date}
                            makingTime={braid.makingTime}
                            price={braid.price}
                            season={braid.season}

                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default BraidList;