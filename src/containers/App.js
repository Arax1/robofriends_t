import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css'


class App extends Component {

    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));


    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {

        const { robots, searchField } = this.state
        const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>

        );
    }

}

export default App;