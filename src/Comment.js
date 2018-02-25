import React, {Component} from 'react'

export default class Comment extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.comment.user}</h3>
				<section>{this.props.comment.text}</section>
			</div>
		)
	}
}