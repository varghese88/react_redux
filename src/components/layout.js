import React from "react";
import { Router, Route,IndexRoute,browserHistory} from "react-router"
import Home from "./home/home"
import {Main} from "./main"
import {About} from "./about/about"
import {Login} from "./login/login"

export function requireAuth(extState, replace){
    if (false) {
        replace({
        pathname: '/login'
        })
    }
}
export class AppLayout extends React.Component{

    render(){
        return (
            <Router history={browserHistory} >
                <Route path="/" component={Main} onEnter={requireAuth}>
                    <IndexRoute component={Home}/>
                    <Route  path="main" component={Home} />
                    <Route  path="about" component={About} />
                </Route>
                <Route  path="login" component={Login}/>
            </Router>
        );
    }
}
