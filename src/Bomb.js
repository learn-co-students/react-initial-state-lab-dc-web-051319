import React, {Component} from 'react'

export default class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount 
        }
    }

    render(){
        if(this.state.secondsLeft !== 0){
     return(

        
      <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>

     )  
        }
        
        else {
            return(
                <h1>Boom!</h1>
            )
        }
    }
}


// 1.  Its initial state should have a property called `secondsLeft`.
// 2.  The initial value of `secondsLeft` is set by passing in an `initialCount`
//     prop to the `Bomb` component. Don't forget to pass the argument props into
//     the constructor (i.e., `constructor(props)`).
// 3.  It should render the text `'<SECONDS_LEFT> seconds left before I go boom!'`,
//     where `<SECONDS_LEFT>` is the value of `secondsLeft`.
// 4.  **If `secondsLeft` equals `0`, it should render `'Boom!'` instead.**
