import React from "react";

import {NavBar} from "./navbar"

export class Main extends React.Component{
    render(){
        return (
            <div className="container">
               <NavBar/>
               <div className="container">
                    {this.props.children}
               </div>
            </div>
        );
    }
}