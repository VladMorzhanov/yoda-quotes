import React, {Component} from 'react';
import styled from 'styled-components'

const AppWrapper = styled.div`
    
`

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }

    render() {
        return (
            <div className="App">
                <input value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.valid})}/>
            </div>
        );
    }
}

export default App;
