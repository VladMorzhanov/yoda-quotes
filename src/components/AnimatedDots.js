import React from 'react';
import vader from '../assets/vader.png'
import styled from 'styled-components'

const Vader = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 16px;
`

export default class AnimatedDots extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const self = this
        self.interval = setInterval(() => {
            if (self.state.count === 4) {
                self.setState({
                    count: 0
                })
            } else {
                self.setState({
                    count: self.state.count + 1
                })
            }
        }, 500)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    render() {
        const a = []
        for (let i = 0; i < this.state.count; ++i) {
            a.push(i)
        }
        return (
            <span>
                {a.map(v => <Vader src={vader} key={v}/>)}
            </span>
        )
    }
}