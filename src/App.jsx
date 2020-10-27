import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import FilmId from './components/FilmId';
import PersonId from './components/PersonId';

export default class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Link to="/" className="btn btn-primary m-2">Go Home</Link>
                    <Link to="/films" className="btn btn-secondary m-2">Load Films</Link>
                    <Link to="/people" className="btn btn-danger m-2">Load People</Link>
                    {/* navbar */}
                    {/* body of webpage */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/films" component={Films}/>
                        <Route exact path="/people" component={People}/>
                        <Route exact path="/films/:filmid" component={FilmId}/>
                        <Route exact path="/people/:personid" component={PersonId}/>

                    </Switch>
                    {/* footer */}
                </>
            </Router>
        )
    }
}

