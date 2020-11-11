import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Staff_member from "./Staff_member";
import Staff_memberList from "./Staff_memberList";

class Staff extends  React.Component{

    render() {
        return (
            <Router>
                <Staff_member/>
                <br />
                <Staff_memberList/>
            </Router>
        );
    }
}

export  default Staff;