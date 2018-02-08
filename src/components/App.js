import React, {Component} from 'react';
import styled from 'styled-components'

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input{
      margin-bottom: 40px;
      margin-top: -100px;
    }
`

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({inputValue: e.currentTarget.value})
    }

    render() {
        return (
            <AppWrapper className="App">
                <input onChange={this.onChange}/>
                <p>Value: {this.state.inputValue}</p>
            </AppWrapper>
        );
    }
}

export default App;
