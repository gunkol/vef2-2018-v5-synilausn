import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  render() {

    return (
      <Router>
        <main>
          <Helmet titleTemplate="%s – Próftöflur" />

          <header>
            <h1><Link to="/">Próftöflur</Link></h1>
            <Navigation />
          </header>

          <section>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/:school" component={School} />
              <Route component={NotFound} />
            </Switch>
          </section>

        </main>
      </Router>
    );
  }
}

export default App;
