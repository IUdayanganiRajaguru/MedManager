import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ListStudents from './ListStudents';
import AddStudent from './AddStudent';
import ViewStudent from './ViewStudent';

import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    pageContent: {
        marginLeft: theme.spacing(35),
        marginRight: theme.spacing(0),
        marginTop: theme.spacing(5),
        padding: theme.spacing(5)
    }
}))

function Student() {

    const classes = useStyles();

    return (
        <Router>
            <AddStudent/>
            <ListStudents/>
            <br />
            <ViewStudent/>
            <br /><br /><br />
        </Router>
    );
}

export default Student;
