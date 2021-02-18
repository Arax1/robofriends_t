import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css'


const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    })

    const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
        <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>
            <Searchbox searchChange={(event) => { setSearchField(event.target.value) }} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>

    );
}

export default App;