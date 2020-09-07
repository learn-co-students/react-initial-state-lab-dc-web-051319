// your Bomb code here!
import React from "React";

export default class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state = {secondsLeft: this.props.initialCount}
    }

    render(){
        let bombTime = this.state.secondsLeft

        if (bombTime == 0) return <div>Boom!</div>

        return(
            <div>{bombTime} seconds left before I go boom!</div>
        )
    }

}