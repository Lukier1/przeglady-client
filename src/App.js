import React, {Component} from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {isUserLogged: false};
    }

    loginSuccess() {
        this.setState(state => ({ isUserLogged: true}));
    }
    render() {
        const isUserLogged = this.state.isUserLogged;
        return (
            <div className="App">
                {!isUserLogged ? (
                    <Login success={this.loginSuccess} />
                ) : (
                    <Dashboard/>)}
            </div>
        );
    }
}


export default App;
