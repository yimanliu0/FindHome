import React from "react";
import SignIn from "./sign_in.js";
import Home from "./home.js";
import SignUp from "./sign_up.js";
import Table from "./table.js";
import UserProfile from "./userprofile.js";
import CommentPage from "./comment_page";
import Map from "./map.js";
import Table2 from "./table2.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/table" component={Table} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/commentpage" component={CommentPage} />
          <Route path="/map" component={Map} />
          <Route path="/table2" component={Table2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
