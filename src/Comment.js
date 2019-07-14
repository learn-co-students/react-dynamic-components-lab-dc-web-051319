import React, { Component } from 'react';

// <p align="center">
//   <img src="https://curriculum-content.s3.amazonaws.com/react/react-dynamic-components-lab-completed-example.png" />
// </p>

// class TestComponent extends Component {
//   render() {
//     return (
//       <div className="video">
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/5TbUxGZtwGI" frameBorder="0" allow="autoplay; encrypted-media" title="time video" allowFullScreen></iframe>
//       </div>
//     );
//   }
// }

// export default TestComponent;

// class Comment extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.commentText}
//       </div>
//     )
//   }
// }

// render() {
//   return (
//     <button className={classnames('pill', this.props.styleName)}>
//       {this.props.children}
//     </button>
//   );
// }


import classnames from 'classnames';


class Comment extends React.Component {

	render(){

	

	return (
		<div className={classnames("comment", this.props.styleName)}>
		{this.props.commentText}
		</div>
		) 
	}
}

export default Comment;
