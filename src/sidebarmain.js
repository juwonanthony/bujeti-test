import React, { Component } from 'react';
import { render } from 'react-dom';
import Sidebar from './pages/Sidebar';
import MainContent from './App'
import './style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    toggleSidebar() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        return (
            <main>
                <Sidebar toggleSidebar={this.toggleSidebar.bind(this)} expanded={this.state.expanded} />
                <MainContent expanded={this.state.expanded} />
            </main>
        );
    }
}

render(<App />, document.getElementById('root'));
