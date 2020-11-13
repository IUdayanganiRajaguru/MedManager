
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Staff from "./components/Staff";

function App() {

  const marginTop = {
    marginTop:"80px"
  };

  return (
      <Router>
        <NavigationBar/>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/staff" exact component={Staff} />
                <Route path="/" exact component={Welcome} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
  );
}

export default App;
