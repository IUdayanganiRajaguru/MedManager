import React from "react";
import {Col, Container, Navbar} from "react-bootstrap";

class Footer extends React.Component{
    render(){
        let fullYear = new Date().getFullYear();

        return(
            <div>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Container>
                        <Col lg={12} className="text-center text-muted">
                            <div>{fullYear}, All Rights Reserved</div>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Footer;