import React, {Component} from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

class Main extends Component {
    render() {
        return (
            // <HashRouter>
            //     <div>
            //         <h1 className = "title">Single Page Application</h1>
            //         <ul className = "header">
            //             <li><NavLink to = "/">Home</NavLink></li>
            //             <li><NavLink to = "/About">About</NavLink></li>
            //             <li><NavLink to = "/contact">Contact</NavLink></li>
            //         </ul>
            //         <div className = "content">
            //             <Route exact path = "/" component = {Home}/>
            //             <Route exact path = "/about" component = {About}/>
            //             <Route exact path = "/contact" component = {Contact}/>
            //         </div>
            //     </div>
            // </HashRouter>
            <div>
                <h1>test</h1>
            </div>
        )
    }
}

export default Main;