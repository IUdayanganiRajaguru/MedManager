
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Staff_member from "./components/Staff_member";
import Staff_memberList from "./components/Staff_memberList";

function App() {

  const marginTop = {
    marginTop:"20px"
  };

  return (
      <Router>
        <NavigationBar/>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/addStaff" exact component={Staff_member} />
                <Route path="/staffList" exact component={Staff_memberList} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
  );
}

export default App;
