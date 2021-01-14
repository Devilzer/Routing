import logo from './logo.svg';
import './App.css';
import First from "./First";
import Second from "./Second";
import  Nav  from "./Nav";
import Item from "./Item";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
          <Nav/>
          <Switch>
            <Route path="/first" exact>
              <First/>
            </Route>
            <Route path="/second" exact component={Second}/>
            <Route path="/item/:id" component={Item}/>
          </Switch>
      </div>
      </Router>
    
    
  );
}

export default App;
