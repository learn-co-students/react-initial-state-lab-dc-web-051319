import React, {Component} from 'react'



export default class ImageSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentSlideIndex : 0
        }
    }
    render(){
     return(

        <h1>I am on slide {this.state.currentSlideIndex}</h1>

     )   
    }
}

// 1) should set the `currentSlideIndex` to 0 on its state
// 2) render the correct text