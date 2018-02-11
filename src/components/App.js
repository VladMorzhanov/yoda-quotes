import React, {Component} from 'react';
import {action, inject, observer} from 'mobx-react'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import {YODA_LOGO_URL} from "../constants";

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
  margin-top: -20px;
  font-family: Helvetica, sans-serif;
  font-size: 32px;
`

const QuoteWrapper = styled.div`
  p{
    padding: 10px;
    padding-bottom: 12px;
    max-width: 700px;
    margin: 0;  
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: #000;
    span{
      color: #0a6e00;
    }
  }
`

const paperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '700px',
    padding: '10px',
    minHeight: '160px',
    marginTop: '30px',
    marginBottom: '40px'
}

const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    fontWeight: 'bold',
    color: 'white',
    height: 48,
    fontFamily: 'Helvetica, sans-serif',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
};

const Waiting = styled.h1`
  color: #000000;
  text-align: center;
  font-size: 24px;
`

@inject('rootStore')
@observer
class App extends Component {
    componentDidMount() {
        const {rootStore} = this.props
        if (!rootStore.currentQuote.quote || 0 === !rootStore.currentQuote.quote.length) {
            rootStore.fetchQuote(true)
        }
    }

    renderQuotes() {
        const {rootStore} = this.props
        return (
            <QuoteWrapper>
                <p>
                    <span>{rootStore.currentQuote.author}</span>: {' '}
                    {rootStore.currentQuote.quote}
                </p>
                <p>
                    <span>Yoda: </span> {' '}
                    {rootStore.currentQuote.yodaQuote}
                </p>
            </QuoteWrapper>
        )
    }

    render() {
        const {rootStore} = this.props
        return (
            <AppWrapper className="App">
                <Title>Yoda Quotes</Title>
                <img src={YODA_LOGO_URL} alt="Yoda"/>
                <Paper style={paperStyle}>
                    {rootStore.currentQuote.quote.length > 0 ?
                        this.renderQuotes() :
                        <Waiting>Waiting for wisdom...</Waiting>
                    }
                </Paper>
                <FlatButton
                    style={buttonStyle}
                    onClick={() => rootStore.fetchQuote(true)}
                >Get New Quote</FlatButton>
            </AppWrapper>
        );
    }
}

export default App;
