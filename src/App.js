import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    start() {
        let a = [1, 2, 3];
        let c = () => [...a, 4];
        console.log(c());
    }


    constructor(props) {
        super(props);
        this.state = {todos: [], show: 'all'};
        this.start();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
