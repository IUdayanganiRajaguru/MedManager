import React from 'react';
import { Navbar, Nav, NavDropdown } from  'react-bootstrap';
import { Link } from "react-router-dom";
import {faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavigationBar extends React.Component{
    render(){
        return (
            <div>
                <Navbar bg="light" fixed="top">
                    <Link to={""} style={{color:'green', fontWeight: 'bold', fontSize:'24px'}} className="navbar-brand"><FontAwesomeIcon icon={faLaptopMedical} />
                        {" "}MedManager
                    </Link>
                    <Nav className="mr-auto" style={{color:'green', fontWeight: 'bold', fontSize:'20px'}}>
                        <Link to={""} className="nav-link">Patients</Link>
                        <Link to={"staff"} className="nav-link">Staff Members</Link>
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