import React, {Component} from "react";

export default class Comment extends Component {
    render() {
        // console.log(this.props.commentText);
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}
