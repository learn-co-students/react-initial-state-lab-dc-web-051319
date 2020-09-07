// your ImageSlider code here!
import React from "react";

class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  increment = () => {
    const newIndex = this.state.currentSlideIndex + 1
    this.setState({
      currentSlideIndex: newIndex
    })
  }

  render(){
    return(
      <div onClick={this.increment}>
      I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}
export default ImageSlider
