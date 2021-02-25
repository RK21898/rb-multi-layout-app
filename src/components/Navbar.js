import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <img 
                src='https://cdn.auth0.com/blog/react-js/react.png'
                width='50px'
                height='50px' 
            />
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="Home">Home</Link>
                        </li>
                        <li>
                            <Link to="About">About</Link>
                        </li>
                        <li>
                            <Link to="Login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
