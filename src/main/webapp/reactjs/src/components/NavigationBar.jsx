import React from 'react';
import { Navbar, Nav, NavDropdown } from  'react-bootstrap';
import { Link } from "react-router-dom";

class NavigationBar extends React.Component{
    render(){
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Link to={""} className="navbar-brand">
                        MedManager
                    </Link>
                    <Nav className="mr-auto">
                        <Link to={"staffList"} className="nav-link">Patients</Link>
                        <Link to={"addStaff"} className="nav-link">Staff Members</Link>
                        <Link to={""} className="nav-link">Appointments</Link>
                        <NavDropdown title="Reports" id="basic-nav-dropdown">
                            <NavDropdown.Item to={""}>Medical Certificates</NavDropdown.Item>
                            <NavDropdown.Item to={""}>Lab Reports</NavDropdown.Item>
                            <NavDropdown.Item to={""}>Drug Reports</NavDropdown.Item>
                            <NavDropdown.Item to={""}>Equipments Reports</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;