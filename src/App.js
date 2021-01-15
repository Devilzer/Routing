import logo from './logo.svg';
import './App.css';
import First from "./First";
import Second from "./Second";
import  Nav  from "./Nav";
import Item from "./Item";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
          <Nav/>
          <Switch>
            <Route path="/home">
              <h2>
                Welcome Homepage.
              </h2>
              <Home/>
            </Route>
            <Route path="/first" >
              <First/>
            </Route>
            <Route path="/second" component={Second}/>
            <Route path="/item/:id" component={Item}/>
          </Switch>
      </div>
      </Router>
    
    
  );
}

export default App;
