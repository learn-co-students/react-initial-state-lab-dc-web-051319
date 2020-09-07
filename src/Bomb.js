// your Bomb code here!
import React from "react";

class Bomb extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  increment = () => {
    const newSeconds = this.state.secondsLeft - 1
    this.setState({
      secondsLeft: newSeconds
    })
  }

  timer = () =>{
    if(this.state.secondsLeft != 0 ){
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }else{
      return "Boom!"
    }
  }

  render(){
    return(
      <div onClick={this.increment}>
      {
        this.timer()
      }
      </div>
    )
  }
}
export default Bomb
