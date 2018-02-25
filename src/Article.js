import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

export default class Article extends Component {
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired
	}

	constructor(props) {
		super(props)
		this.state = {
			isOpen: true,
			isOpenComments: false
		}
	}

	render() {
		const {article} = this.props
		const {isOpen} = this.state
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick = {this.toggleOpen}>
					{!isOpen ? 'open' : 'close'}
				</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		const {isOpenComments} = this.state
		if (!this.state.isOpen) return null
		const {article} = this.props
		return (
			<div>
				<section>{article.text}</section>
				<button onClick = {this.toggleOpenComments}>
						{!isOpenComments ? 'open comments' : 'close comments'}
				</button>
				{this.getComments()}
			</div>
		)
	}

	getComments() {
		if (!this.state.isOpenComments) return null
		const commentElements = this.props.article.comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)
		return (
			<ul>
				{commentElements}
			</ul>
			
		)
	}

	toggleOpenComments = () => {
		this.setState({
			isOpenComments: !this.state.isOpenComments	
		})
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen	
		})
	}	
}
