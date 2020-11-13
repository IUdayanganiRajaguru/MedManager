import React from "react";
import { Card, Table, Button } from 'react-bootstrap';

class Staff_memberList extends React.Component{
    render() {
        return (
            <Card className="border border-light bg-light">
                <Card.Header style={{fontWeight:'bold'}}>Staff Member List</Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive variant="light" style={{textAlign:'center'}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Role</th>
                            <th>Username</th>
                            <th>NIC Number</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Button size="md" type="submit" style={{backgroundColor:'#100b5a', borderColor:'#100b5a'}}>
                                    View
                                </Button>
                                {" "}
                                <Button size="md" type="submit" style={{backgroundColor:'#5a0b0c', borderColor:'#5a0b0c'}}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <Button size="md" type="submit" style={{backgroundColor:'#100b5a', borderColor:'#100b5a'}}>
                                    View
                                </Button>
                                {" "}
                                <Button size="md" type="submit" style={{backgroundColor:'#5a0b0c', borderColor:'#5a0b0c'}}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>
                                <Button size="md" type="submit" style={{backgroundColor:'#100b5a', borderColor:'#100b5a'}}>
                                    View
                                </Button>
                                {" "}
                                <Button size="md" type="submit" style={{backgroundColor:'#5a0b0c', borderColor:'#5a0b0c'}}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default Staff_memberList;