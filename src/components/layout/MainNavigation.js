
import classes from './MainNavigation.module.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { DetailsContext } from "./../../store/DetailsContext";
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainNavigation() {
    /*const query = UseRef();*/
    const { allBraids } = useContext(DetailsContext);

    function hanldeSearch(e) {
        e.preventDefault();
        console.log(e.target.value);

        const searchBraids = allBraids.map(braid => {
            if (braid !== undefined && braid.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                console.log("title:" + braid.title);
                return braid;
            }
        })

        const searchBraidsREs = searchBraids.filter(function (el) { return el !== undefined })
        console.log(searchBraidsREs);

        //setAllBraids(searchBraids);

        /*
                return <div >
                    <BraidList braids={searchBraidsREs} />
                </div>;
        */
    }
    return (
        <Navbar className={classes.navbar} collapseOnSelect expand="md">
            <Container className={classes.content}>
                <Navbar.Brand>
                    <div className={classes.logo}>
                        <a href='/'>< img src="logo192.png" alt="Image Load Error" width="150" /></a>

                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className={classes.content}>

                        <Nav.Link href="/">All Braids</Nav.Link>
                        <Nav.Link href="/latest-braids">Lastest Braids</Nav.Link>
                        <Nav.Link href="/popular-braids">Populars Braids </Nav.Link>

                        <Form className="d-flex">
                            <FormControl onChange={e => hanldeSearch(e)}
                                type="search"
                                placeholder="Search by Title"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button className={classes.search} >Search</Button>
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default MainNavigation;