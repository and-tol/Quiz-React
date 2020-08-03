import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './UI/Layout/Layout';
import Quiz from './components/Quiz/Quiz';
import Auth from './components/Auth/Auth';
import QuizCreator from './components/QuizCreator/QuizCreator';
import QuizList from './components/QuizList/QuizList';
import Logout from './components/Logout/Logout';
import {autoLogin} from './store/actions/auth'

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route exact path='/' component={QuizList} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/logout' component={Logout} />
          <Route exact path='/' component={QuizList} />
          <Redirect to='/' />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});

const mapDispatchToProps = {
  autoLogin: () => autoLogin(),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// ? withRouter не обязателен
