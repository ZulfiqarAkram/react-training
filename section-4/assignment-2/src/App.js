import React, {Component} from 'react';
import './App.css';
import Validation from './components/Validation'
import CharComponent from './components/CharComponent'


class App extends Component {
    state = {
        userInput:''
    };


    onChangeInputHandler(e) {
        this.setState({
            userInput:  e.target.value,
        })
    }

    removeChar(index) {
        let textArrayNew = this.state.userInput.split("");
        textArrayNew.splice(index, 1);
        this.setState({
            userInput: textArrayNew.join(""),
        })
    }

    render() {
        return (
            <div className="App">
                <input value={this.state.userInput} onChange={(e) => this.onChangeInputHandler(e)}/>
                <p>{this.state.userInput.length}</p>
                <Validation charLength={this.state.userInput.length}/>
                {this.state.userInput.split("").map((c, i) => {
                    return <CharComponent char={c} key={i} removeChar={() => this.removeChar(i)}/>
                })}
            </div>
        );
    }
}

export default App;
