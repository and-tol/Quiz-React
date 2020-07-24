import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './UI/Layout/Layout';
import Quiz from './components/Quiz/Quiz';
import { Auth } from './components/Auth/Auth';
import QuizCreator from './components/QuizCreator/QuizCreator';
import QuizList from './components/QuizList/QuizList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route exact path='/quiz-creator' component={QuizCreator} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route exact path='/' component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
