// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        let bombMessage = this.state.secondsLeft
        if (this.state.secondsLeft === 0) return <div>Boom!</div>

        return (
            <div>{bombMessage} seconds left before I go boom!</div>
        )
    }
}

export default Bomb
