import React from "react";
import {Col, Container, Navbar} from "react-bootstrap";

class Footer extends React.Component{
    render(){
        let fullYear = new Date().getFullYear();

        return(
            <div>
                <Navbar fixed="bottom" bg="light" variant="light">
                    <Container>
                        <Col lg={12} className="text-center text-muted">
                            <div style={{color:'green', fontSize:'18px'}}>{fullYear}, All Rights Reserved</div>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Footer;