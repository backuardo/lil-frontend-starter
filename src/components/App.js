import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import SampleCard from './SampleCard';

import '../style.scss';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Switch>
          <Route exact path="/" component={SampleCard} />
          <Route path="/:path" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
