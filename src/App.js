import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import TestEntries from "./user/components/TestEntries";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/place/new" exact>
          <NewPlace />
        </Route>
        <Route path="/test" exact>
          <TestEntries />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
