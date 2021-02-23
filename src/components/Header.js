import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Favorites from './Favorites';
import Weather from './WeatherList';
import P404 from './P404';
import Home from './Home';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <h5>
                        <a href='/' className='nav-link'>Home| {''}</a>
                    </h5>
                </li>
                <li className="nav-item">
                    <h5>
                        <a href='/Weather' className='nav-link'>Ciudad|{''}</a>
                    </h5>
                </li>
                <li className="nav-item">
                    <h5>
                        <a href='/Favorites' className='nav-link'>{''}Favoritos|</a>
                    </h5>
                </li>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
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
                </ul>
            </div>
            </nav>
    )
}

export default Header;