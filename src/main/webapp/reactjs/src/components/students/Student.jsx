import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ListStudents from './ListStudents';
import AddStudent from './AddStudent';
import ViewStudent from './ViewStudent';

import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    pageContent: {
        marginLeft: theme.spacing(8.5),
        marginRight: theme.spacing(8.5),
        marginTop: theme.spacing(3.5),
        padding: theme.spacing(5)
    }
}))

function Student() {

    const classes = useStyles();

    return (
        <Router>
            <Paper className={classes.pageContent}>
                <AddStudent/>
            </Paper>
            <br />
            <ListStudents/>
            <br />
            <ViewStudent/>
            <br /><br /><br />
        </Router>
    );
}

export default Student;
