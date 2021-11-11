import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import List from "./pages/List";
import Products from "./pages/Products";
import Companies from "./pages/Companies";
import Map from "./pages/Map";


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/map" component={Map}></Route>
                <Route  path="/products" component={Products}></Route>
                <Route  path="/companies" component={Companies}></Route>
                <Route  path="/list" component={List}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Router;