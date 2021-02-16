import React, {Component} from 'react';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import './App.css';


class App extends Component {
    state = {
        username: 'Ali'
    };

    updateUsername = (newUsername) => {
        this.setState({
            username: newUsername
        })
    };

    render() {
        const inlineStyle={
            backgroundColor:'#aeb3ae'
        }
        return (
            <div className="App" style={inlineStyle}>
                <UserInput name={this.state.username} onChangeUsername={this.updateUsername}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
