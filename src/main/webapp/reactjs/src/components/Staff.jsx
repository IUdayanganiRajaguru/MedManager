import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Staff_memberAdding from "./Staff_memberAdding";
import Staff_memberList from "./Staff_memberList";
import Staff_memberView from './Staff_memberView';

class Staff extends  React.Component{

    render() {
        return (
            <Router>
                <Staff_memberAdding/>
                <br />
                <Staff_memberList/>
                <br />
                <Staff_memberView/>
                <br /><br /><br />
            </Router>
        );
    }
}

export  default Staff;