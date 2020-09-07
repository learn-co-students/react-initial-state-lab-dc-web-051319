import React from 'react'

export default class Bomb extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      secondsLeft:this.props.initialCount
    }
  }

  render(){
    return(
      this.state.secondsLeft === 0? "Boom!":<h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    )
  }
}
