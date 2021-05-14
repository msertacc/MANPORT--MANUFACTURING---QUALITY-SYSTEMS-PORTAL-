import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from '../pages/Dashboard'
import Management from '../pages/Management'
import Home from "../pages/Home";
import Navbar from '../components/Navbar'
import ApplicationManagement from '../pages/ApplicationManagement'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Issues from '../pages/Issues'
import Links from '../pages/Links'
import { useSelector } from "react-redux";
import PlantManagement from "../pages/PlantManagement";

const AppRouter = () => {
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
  }));

  return (
    <Router>
      <Navbar />
      {!isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect exact to="/" />
        </Switch>) : (
        <Switch>
          <Route exact path="/" component={Home} />
          {!isLoggedIn && <Route path="/login" component={Login} />}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/management" component={Management} />
          <Route exact path="/management/plants" component={PlantManagement} />
          <Route path="/management/:app" component={ApplicationManagement} />
          <Route exact path="/links" component={Links} />
          <Route path="/issues" component={Issues} />
          <Redirect exact to="/" />
        </Switch>
      )
      }
    </Router>
  );
};

export default AppRouter;
