import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {

    if (this.props.opacity >= .2) {
      let newOpacity = ((this.props.opacity*10)-1) /10
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newOpacity} />
      </div>
      );
  } else {
      return null;
  }
  }
  
}


 

// if (this.props.value < 100) {
//   return (
//       <div>
//           <Example value={newValue} />
//       </div>
//   );
// } else {
//   return null;
// }