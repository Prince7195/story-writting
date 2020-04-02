import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Stories, NewStory } from "./components";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact={true} path="/">
                <Stories />
              </Route>
              <Route path="/new-post">
                <NewStory />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
