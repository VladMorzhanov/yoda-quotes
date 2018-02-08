/**
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-size: 24px;
    font-weight: bold;
  }
`

export default class HomePage extends React.PureComponent {
  render () {
    return (
      <HomeWrapper>
        <h1>Youda quotes</h1>
      </HomeWrapper>
    )
  }
}
