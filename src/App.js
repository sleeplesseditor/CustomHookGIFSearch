import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import Menu from './components/Menu/Menu';
import ErrorBoundary from './page/ErrorBoundary';
import './App.scss';

const MainPage = React.lazy(() => import('./page/mainPage'));

function App() {
  return (
    <Router>
      <Menu title={'useGifSearch'} />
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={LazyLoader(MainPage)} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
