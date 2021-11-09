import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const Router = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/map" component={Map}></Route>
                {/*<Route  path="/map" component={Mapa}></Route>*/}
                {/*<Route  path="/map" component={Mapa}></Route>*/}
                {/*<Route  path="/map" component={Mapa}></Route>*/}
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Router;