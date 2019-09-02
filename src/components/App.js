import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';

import '../style.scss';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:path" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
