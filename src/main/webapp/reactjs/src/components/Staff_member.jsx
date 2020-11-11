import React from "react";
import { Card, Form, Button, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faLaptopMedical } from "@fortawesome/free-solid-svg-icons";

class Staff_member extends React.Component{

    constructor(props) {
        super(props);
        this.state = {role:'', username:'', firstName:'', lastName:'', dob:'', gender:'', nic:'', phone:''};
        this.staffMemberChange = this.staffMemberChange.bind(this);
        this.addStaffMember = this.addStaffMember.bind(this);

    }

    addStaffMember(event) {
        alert('Role: '+this.state.role+'    Username: '+this.state.username+'   First Name: '+this.state.firstName+'    Last Name: '+this.state.lastName+'   Date of Birth: '+this.state.dob+'   Gender: '+this.state.gender+'   NIC: '+this.state.nic+'   Phone: '+this.state.phone);
        event.preventDefault();
    }

    staffMemberChange(event) {
     this.setState({
        [event.target.name]:event.target.value
     });
    }

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Add Staff Member</Card.Header>
                <Form onSubmit={this.addStaffMember} id="staffFormID">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridRole">
                                <Form.Label>Role</Form.Label>
                                <Form.Control required name="role" value={this.state.role} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter Role" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required name="username" value={this.state.username} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter Username" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required name="firstName" value={this.state.firstName} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required name="lastName" value={this.state.lastName} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDOB">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control required name="dob" value={this.state.dob} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter Date of Birth" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control required name="gender" value={this.state.gender} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter Username" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNIC">
                                <Form.Label>NIC</Form.Label>
                                <Form.Control required name="nic" value={this.state.nic} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter NIC Number" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control required name="phone" value={this.state.phone} onChange={this.staffMemberChange} type="test" className="bg-dark text-white" placeholder="Enter Contact Number" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="md" variant="success" type="submit">
                            Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}

export default Staff_member;