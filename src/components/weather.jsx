import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'

class Weather extends PureComponent{
	render(){
		return(
			<span>
				<div className ="btn-group" >
					<button className = "btn btn-light">
						Change City
					</button>
					<button className="btn" >
						<i className="fa fa-refresh" aria-hidden="true"></i>
					</button>
					<span className="btn-group btn-group-toggle" >
					<label className="btn active"><input type="radio" name="temp" id="celsius" autoComplete="off" checked/>C </label>
					<label className="btn"><input type="radio" name="temp" id="Fahrenheit" autoComplete="off"/>F </label>
					</span>
				</div>
				<div>
					<i className="fa fa-sun-o"></i>
					<i className="fa fa-cloud"></i>
					<i className="fa fa-tint"></i> {/* For Rain */}
				</div>
			</span>
		);
	}
}

Weather.propTypes = {
	city:PropTypes.string.isRequired,
	temp:PropTypes.number.isRequired,
	status:PropTypes.string
}

export default Weather