import {React,PureComponent} from 'react'
import propTypes from 'prop-types'

export default class Chat extends PureComponent{
	render(){
		return(
			<div>
				<p>{this.props.text}</p>
				<p>{this.props.date}</p>
				<footer>{this.props.sender}</footer>
			</div>
		);
	}
} 
Chat.propTypes={
	text:PropTypes.string.isRequired,
	date:this.PropTypes.date,
	sender:this.PropTypes.string.isRequired
}