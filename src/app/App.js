import React from "react";
import './App.css';
import { Navigation } from '../components/navigation/navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostList } from "../features/PostList/PostList";

function App() {


    return (
        <Router>
            <Navigation />
            <PostList />
        </Router>
    )
}

export default App;
