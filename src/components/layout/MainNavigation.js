
import classes from './MainNavigation.module.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { DetailsContext } from "./../../store/DetailsContext";
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo192.png"
import firebase from "./../firebase/fireBaseConfig";

const ref = firebase.firestore().collection('braids');

async function getBraid(setAllBraids,title) {
  if(title===''){
    ref.where("visible","==",true)
   .onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setAllBraids(items);
    return items;
  });
  }else
  {
    ref.where("visible","==",true)
   .where('title', '>=', title.toUpperCase()).where('title', '<', title.toLowerCase() + 'z')
   .onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setAllBraids(items);
    return items;
  });
  }


}


function MainNavigation() {
    const { setAllBraids } = useContext(DetailsContext);

    function hanldeSearch(e) {
        e.preventDefault();
        console.log(e.target.value);
        getBraid(setAllBraids,e.target.value)
    }
    return (
        <Navbar className={classes.navbar} collapseOnSelect expand="md">
            <Container className={classes.content}>
                <Navbar.Brand>
                    <div className={classes.logo}>
                        <a href='/'>< img src={logo} alt="Image Load Error" width="150" /></a>

                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className={classes.content}>

                        <Nav.Link href="/">All Braids</Nav.Link>
                        <Nav.Link href="/latest-braids">Lastest Braids</Nav.Link>
                        <Nav.Link href="/popular-braids">Populars Braids </Nav.Link>

                        <div className={classes.searchBox}>

                          <button className={classes.btnSearch}><i class="fas fa-search"></i></button>
                            <input onChange={e => hanldeSearch(e)} type="search" className={classes.inputSearch} placeholder="Search by title..."/>
                         
                        </div>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default MainNavigation;