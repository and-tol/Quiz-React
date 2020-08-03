import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './UI/Layout/Layout';
import Quiz from './components/Quiz/Quiz';
import Auth from './components/Auth/Auth';
import QuizCreator from './components/QuizCreator/QuizCreator';
import QuizList from './components/QuizList/QuizList';
import { connect } from 'react-redux';

function App() {

  let routes = (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route exact path='/quiz-creator' component={QuizCreator} />
      <Route path='/quiz/:id' component={Quiz} />
      <Route exact path='/' component={QuizList} />
      <Redirect to='/' />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route exact path='/quiz-creator' component={QuizCreator} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route exact path='/' component={QuizList} />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});

export default connect(mapStateToProps)(App);
