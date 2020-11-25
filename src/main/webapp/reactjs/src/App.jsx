import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import { CssBaseline, Grid } from '@material-ui/core';

import HeaderBar from "./components/HeaderBar";
import Footer from './components/Footer';
import Welcome from './components/Welcome';

import Student from './components/students/Student';
import StaffMember from './components/staff/StaffMember';
import Appointment from './components/appointments/Appointment';
import Reports from './components/reports/Reports';
import Notifications from './components/Notifications';
import Emails from './components/Emails';
import Profile from './components/Profile';


function App() {

  const marginTop = {
    marginTop:"20px"
  };

  return (
    <Router>
      <HeaderBar />
        <Grid lg={12} style={marginTop}>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/Student" exact component={Student} />
            <Route path="/StaffMember" exact component={StaffMember} />
            <Route path="/Appointment" exact component={Appointment} />
            <Route path="/Reports" exact component={Reports} />
            <Route path="/Notifications" exact component={Notifications} />
            <Route path="/Emails" exact component={Emails} />
            <Route path="/Profile" exact component={Profile} />
          </Switch>
        </Grid>
      <Footer />
      <CssBaseline />
    </Router>
  );
}

export default App;
