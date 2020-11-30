import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import AddUser from './AddUser';
import ListUser from './ListUser';

function User() {
    return (
        <Router>
            <AddUser />
            <ListUser />
        </Router>
    )
}

export default User;



