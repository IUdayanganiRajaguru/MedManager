import React from "react";

import { Jumbotron } from "react-bootstrap";

class Welcome extends React.Component{
    render() {
        return (
            <div>
                <Jumbotron className="bg-dark text-white">
                    <h1>Welcome To MedManager</h1>
                    <p>
                        Any Text Here
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default  Welcome;