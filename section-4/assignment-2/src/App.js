import React, {Component} from 'react';
import './App.css';
import Validation from './components/Validation'
import CharComponent from './components/CharComponent'


class App extends Component {
    state = {
        textArray: [],
        charLength: 0,

    };


    onChangeInputHandler(e) {
        const length = e.target.value.toString().length;
        this.setState({
            charLength: length,
            textArray: [...e.target.value]
        })
    }

    removeChar(index) {
        let textArrayNew = this.state.textArray;
        textArrayNew.splice(index, 1);
        this.setState({
            charLength: textArrayNew.length,
            textArray: textArrayNew
        })
    }

    render() {
        return (
            <div className="App">
                <input value={this.state.textArray.join("")} onChange={(e) => this.onChangeInputHandler(e)}/>
                <p>{this.state.charLength}</p>
                <Validation charLength={this.state.charLength}/>
                {this.state.textArray.map((c, i) => {
                    return <CharComponent char={c} key={i} removeChar={() => this.removeChar(i)}/>
                })}
            </div>
        );
    }
}

export default App;
