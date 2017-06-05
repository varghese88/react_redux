import React from "react";
import {Link} from "react-router"

export class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">React-Boom</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/main" activeClassName="active">Home</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}