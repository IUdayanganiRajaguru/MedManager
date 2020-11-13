import React from "react";
import { Card, Form, Button, FormControl, Col, Container, Row, Image } from "react-bootstrap";

class Staff_memberView extends React.Component{
    render(){
        return(
            <Card className="border border-light bg-light" style={{fontWeight:'bold'}}>
                <Card.Header>
                    <Form.Row>
                        <Form.Group as={Col}>
                            View Staff Member
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button size="md" type="submit" style={{backgroundColor:'#100b5a', borderColor:'#100b5a'}}>Search</Button>
                        </Form.Group>
                    </Form.Row>
                </Card.Header>

                <Card.Body>
                    <Container style={{textAlign:'center'}}>
                        <Row>
                            <Image src="../images/image1.jpg" roundedCircle />
                        </Row>
                    </Container>
                    <Form.Row>
                         <Form.Group as={Col} controlId="formGridRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control required name="role" type="test" className="bg-light text-white" placeholder="Enter Role" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required name="username" type="test" className="bg-light text-white" placeholder="Enter Username" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required name="firstName" type="test" className="bg-light text-white" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required name="lastName" type="test" className="bg-light text-white" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridDOB">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control required name="dob" type="test" className="bg-light text-white" placeholder="Enter Date of Birth" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control required name="gender" type="test" className="bg-light text-white" placeholder="Enter Username" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNIC">
                            <Form.Label>NIC</Form.Label>
                            <Form.Control required name="nic" type="test" className="bg-light text-white" placeholder="Enter NIC Number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required name="phone" type="test" className="bg-light text-white" placeholder="Enter Contact Number" />
                        </Form.Group>
                    </Form.Row>
                </Card.Body>

                <Card.Footer style={{textAlign:'right'}}>
                    <Button size="md" type="submit" style={{backgroundColor:'#100b5a', borderColor:'#100b5a'}}>
                        Update
                    </Button>
                    {" "}
                    <Button size="md" type="submit" style={{backgroundColor:'#5a0b0c', borderColor:'#5a0b0c'}}>
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default Staff_memberView;