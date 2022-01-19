import { useContext } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import classes from './Footer.module.css';
import { DetailsContext } from "./../../store/DetailsContext";

function Footer(props) {
    const { whatsAppMessage } = useContext(DetailsContext);

    let text = "https://wa.me/393512301282";
    if (whatsAppMessage !== "")
        text = "https://wa.me/393512301282?text=Ti contatto per il modello N°=" + whatsAppMessage.id + ", " + whatsAppMessage.title + ", " +
            + whatsAppMessage.price + "€ Colore " + whatsAppMessage.baseColor + "  Lunghezza fino al/la spalla/meta dosso/dosso." +
            +"Quando saresti disponibile  ?";

    return (
        <div className={classes.container}>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow md="6">
                        <MDBCol md="6">
                            <h5 className={classes.title}>For All information, Contact us</h5>
                            <p>
                                Follow us on all the socials media.
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBRow>
                                <MDBCol md="3">
                                    <ul>
                                        <li className="list-unstyled">
                                            <a href="https://www.instagram.com/treccine_africane_ferrara/" target="blank" style={{ color: 'red' }} className="p-5 fa-lg w-ic">
                                                <MDBIcon fab icon="instagram" size="2x" />
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <MDBCol md="3">
                                    <ul>
                                        <li className="list-unstyled">
                                            <a href="https://www.facebook.com/arianedongm" target="blank" style={{ color: 'blue' }} className="p-5 fa-lg w-ic">
                                                <MDBIcon fab icon="facebook" size="2x" />
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>

                                <MDBCol md="3">
                                    <ul>
                                        <li className="list-unstyled">
                                            <a href={text} target="blank" style={{ color: 'green' }} className="p-5 fa-lg w-ic">
                                                <MDBIcon fab icon="whatsapp" size="2x" />
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright All Rights Reserved: <a href="/">Treccine Africane </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );

}
export default Footer;

/*
 <ul className="list-group list-group-horizontal-sm">
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/treccine_africane_ferrara/" target="blank" style={{ color: 'red' }} className="p-5 fa-lg w-ic">
                                        <MDBIcon fab icon="instagram" size="2x" />
                                    </a>
                                </li>
                                <p></p>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/arianedongm" target="blank" style={{ color: 'blue' }} className="p-5 fa-lg w-ic">
                                        <MDBIcon fab icon="facebook" size="2x" />
                                    </a>
                                </li>
                                <p></p>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/arianedongm" target="blank" style={{ color: 'black' }} className="p-5 fa-lg w-ic">
                                        <MDBIcon fab icon="tiktok" size="2x" />
                                    </a>
                                </li>
                                <p></p>
                                <li className="list-inline-item">
                                    <a href="https://wa.me/393512301282" target="blank" style={{ color: 'green' }} className="p-5 fa-lg w-ic">
                                        <MDBIcon fab icon="whatsapp" size="2x" />
                                    </a>
                                </li>
                            </ul>*/