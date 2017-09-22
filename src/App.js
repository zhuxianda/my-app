import React, {Component} from 'react';
/*import logo from './logo.svg';*/
/*import './App.css';*/
import DiyDimension from './diyDimension';
import DatePicker from './datePicker';
import SprGame from './SprGame';

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
        //let diy = datePicker({style:{}});
        const style_ = {
           backgroundColor:'red'
        }
        const trendList = [];

        return (
            <div className="App">
                <DatePicker style={style_} />
                <DiyDimension/>
                <SprGame trendList={trendList}/>
{/*                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/}
            </div>
        );
    }
}

export default App;
