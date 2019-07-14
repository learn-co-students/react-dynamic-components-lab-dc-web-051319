import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const cOpacity = this.props.opacity;
      if (cOpacity>0.2){
        return(
          <div className="color-box" style={{opacity: cOpacity}}>
            <ColorBox opacity={cOpacity-0.1} />
          </div>
        )
      }else{
        return(
          <div className="color-box" style={{opacity: cOpacity}}></div>
        )
      }
  }

}

// return (
//   <div className="color-box" style={{opacity: this.props.opacity}}>
//     {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
//   </div>
// )
