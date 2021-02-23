import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Favorites from './Favorites';
import Weather from './WeatherList';
import P404 from './P404';
import Container from './Container';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Proyecto</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container" id="navbarNav">
            <ul className="navbar-nav">
            <ol>
                <h1>
                    <a href='/Weather' >Ciudad {'  '}</a>
                    <a href='/Favorites' >{'     '}Favoritos</a>
                </h1>
                <Router>
                    {/* className='btn btn-primary' */}
                    <Switch>   
                        <Route exact path='/'>
                            <Container/>
                        </Route>                     
                        <Route exact path='/Favorites'>
                            <Favorites/>
                        </Route>
                        <Route exact path='/Weather'>
                            <Weather/>
                        </Route>
                        <Route component={P404}>
                            <P404/>
                        </Route>
                    </Switch>
                </Router>
                </ol>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Header;