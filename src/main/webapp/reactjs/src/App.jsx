import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import './App.css'
import MainPage from './MainPage';
// import loginPage from './components/loginPage';

function App() {

    return(
        <Router>
            <MainPage/>
        </Router>
    );
}


export default App;


        // <div className="login">
        //     <form>
        //         <h2 className="Topic">Sign In</h2><br/>

        //         <input type="text" name="username" placeholder="Username"/><br/><br/>
        //         <input type="password" name="pwd" placeholder="Password"/>
        //         <br/><br/><br/><br/>
                
        //         <button onClick={handleLoginClick}>
        //             Log In
        //         </button>
        //         <br/><br/><br/>

        //         <div className="container">
        //             <Link to="">Reset password</Link>
        //         </div>
        //     </form>
        // </div>

        {/* <a href=""><input
                    type="button"
                    value="Log In"
                    //onClick={handleLoginClick}
                />
                </a> */}