import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import GamesList from '../features/Games/GamesList';
import GameDetails from '../features/Games/GameDetails';
import Weather from '../features/weather/Weather';
import ChangeColor from '../features/change-color/ChangeColor'

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="container">
            <Router>
                <Nav />

                <Route exact path="/" component={ () => <h1>Homepage</h1> } />
                <Route exact path="/games" component={ GamesList } />
                <Route exact path="/games/:id" component={ GameDetails } />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/changecolor" component={ChangeColor} />
            </Router>
        </div>
    );
}

export default App;

