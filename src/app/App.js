import React from "react";
import './App.css';
import Navigation from '../components/navigation/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navigation />
            {/* <Switch >

            </Switch> */}
        </Router>
    )
}

export default App;
