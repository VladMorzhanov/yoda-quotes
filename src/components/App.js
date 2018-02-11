import React, {Component} from 'react';
import AppMUITheme from '../utils/AppMUITheme'
import {action, inject, observer, Provider} from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import styled from 'styled-components'
import {RootStore} from "../stores/RootStore";
import {YODA_LOGO_URL} from "../constants";

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

const QuoteWrapper = styled.div`
  p{
    font-size: 18px;
  }
`

@inject('rootStore')
@observer
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {store} = this.props.rootStore
        return (
            <Provider rootStore={RootStore}>
                <MuiThemeProvider muiTheme={getMuiTheme(AppMUITheme())}>
                    <AppWrapper className="App">
                        <h1>Yoda Quote</h1>
                        <img src={YODA_LOGO_URL} alt="Yoda"/>
                        <QuoteWrapper>
                            <p>{store.currentQuote.quote}</p>
                        </QuoteWrapper>
                        <button onClick={() => store.fetchQuote()}>Get New Quote</button>
                    </AppWrapper>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
