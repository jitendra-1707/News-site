import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  
  render() {
    return (
      <div>
      
      

      <Router>
        <Navbar/>
          <Switch>
              <Route key={"General"} exact path="/">
                  <News  pageSize={12}  category={"general"}/>
              </Route>
              <Route key={"/business"} exact path="/business">
                  <News pageSize={12}  category={"business"}/>
              </Route>
              <Route key={"/entertainment"} exact path="/entertainment">
                  <News pageSize={12}  category={"entertainment"}/>
              </Route>
              <Route key={"/health"} exact path="/health">
                  <News pageSize={12}  category={"health"}/>
              </Route>
              <Route key={"/technology"} exact path="/technology">
                  <News pageSize={12}  category={"technology"}/>
              </Route>

            <Route key={"/science"} exact path="/science">
                  <News pageSize={12}  category={"science"}/>
              </Route>
              <Route key={"/sports"} exact path="/sports">
                  <News pageSize={12}  category={"sports"}/>
              </Route>

            
          </Switch>
    </Router>
     
             
              
      </div>
    )
  }
}


