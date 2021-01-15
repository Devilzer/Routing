import React from 'react';
import {useRouteMatch, Switch,Link ,Route} from "react-router-dom";

function Homec() {
    return (
        <div>
           HomeComponent
        </div>

    )
};
function rouo() {
    return (
        <div>
           Route 1 is selcted...
        </div>

    )
};
function rout() {
    return (
        <div>
           Route 2 is selcted???
        </div>

    )
};
function Home() {
    const {url,path}= useRouteMatch();
    return (
        <div>
        <Link to={`${url}/route1`}>
            <h3>
                Route1
            </h3> 
        </Link>
        <Link to={`${url}/route2`}>
             <h3>
                Route2
            </h3>
        </Link>
        <Switch>
        <Route path={`${path}/route1`} component={rouo}/>
        <Route path={`${path}/route2`} component={rout}/>
        <Route  path="/" component={Homec} />

        </Switch>
           
        </div>

    )
}

export default Home;
