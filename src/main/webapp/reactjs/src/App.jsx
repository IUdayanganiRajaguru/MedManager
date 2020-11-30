import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import { CssBaseline, Grid } from '@material-ui/core';

import HeaderBar from "./components/HeaderBar";
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SideMenu from './components/SideMenu';

import Student from './components/students/Student';
import User from './components/users/User';
import Appointment from './components/appointments/Appointment';
import Reports from './components/reports/Reports';
import Notifications from './components/Notifications';
import Emails from './components/Emails';
import Profile from './components/Profile';
import Search from './components/Search';
import News from './components/News';
import AddStudent from './components/students/AddStudent';
import ListStudents from './components/students/ListStudents';
import AddUser from './components/users/AddUser';
import ListUser from './components/users/ListUser';


function App() {

  const marginTop = {
    marginTop:"20px",
  };

  const marginLeft = {
    marginTop: "50px",
  };

  return (
    <Router>
      <HeaderBar />
        <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
          <Grid item md={3}>
            <SideMenu />
          </Grid>
          <Grid item md={6}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/Student" exact component={Student} />
              <Route path="/AddStudent" exact component={AddStudent} />
              <Route path="/ListStudents" exact component={ListStudents} />
              <Route path="/User" exact component={User} />
              <Route path="/AddUser" exact component={AddUser} />
              <Route path="/ListUser" exact component={ListUser} />
              <Route path="/Appointment" exact component={Appointment} />
              <Route path="/Reports" exact component={Reports} />
              <Route path="/Notifications" exact component={Notifications} />
              <Route path="/Emails" exact component={Emails} />
              <Route path="/Profile" exact component={Profile} />
            </Switch> 
          </Grid>
          <Grid item md={3}>
            <Grid direction="column" justify="space-between" alignItems="center" position="fixed">
              <Grid item>
                <Search />
              </Grid>
              <br />
              <Grid item>
                <News />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      {/* <Footer /> */}
      <CssBaseline />
    </Router>
  );
}

export default App;

{/* <Router>
      <HeaderBar />
        <Grid md={3} style={marginLeft}>
          <SideMenu />
        </Grid>
        <Grid md={6} style={marginTop}>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/Student" exact component={Student} />
            <Route path="/User" exact component={User} />
            <Route path="/Appointment" exact component={Appointment} />
            <Route path="/Reports" exact component={Reports} />
            <Route path="/Notifications" exact component={Notifications} />
            <Route path="/Emails" exact component={Emails} />
            <Route path="/Profile" exact component={Profile} />
          </Switch>
        </Grid>
        <Grid md={3}>
          <Search />
        </Grid>
      <Footer />
      <CssBaseline />
    </Router> */}
