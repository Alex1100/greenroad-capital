import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomeGuest from '.././components/Home/HomeGuest';
import HomeUser from '.././components/Home/HomeUser';
import About from '.././components/About/About';
import Contact from '.././components/Contact/Contact';

class Router extends Component {
  constructor(props) {
    super();
    this.state = {};
  }


  render() {
    const { dispatch, errorMessage, isAuthenticated, history } = this.props;
    return isAuthenticated === false ? (
      <Switch>
        <Route exact path="/">
          <HomeGuest
            history={history}
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            dispatch={dispatch}
          />
        </Route>
        <Route exact path="/about">
          <About
            history={history}
            isAuthenticated={isAuthenticated}
            dispatch={dispatch}
          />
        </Route>
        <Route path="/contact">
          <Contact
            isAuthenticated={isAuthenticated}
            history={history}
            dispatch={dispatch}
          />
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/">
          <HomeUser
            history={history}
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            dispatch={dispatch}
          />
        </Route>
      </Switch>
    )
  }
};


const mapStateToProps = (state) => {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;
  return {
    isAuthenticated,
    errorMessage
  };
};

export default withRouter(connect(mapStateToProps)(Router));
