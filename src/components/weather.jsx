import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import fetchLoader from '../images/ball-triangle.svg'

class Weather extends PureComponent{
	render(){
		const statusClasses = classNames({
			'fa':true,
			'fa-5x':true,
			'fa-cloud':this.props.status==='cloud',
			'fa-tint':this.props.status==='rain',
			'fa-sun':this.props.status!=='rain' && this.props.status!=='cloud'
		})

		const celsiusClasses = classNames({
			'btn':true,
			'btn-light':true,
			'btn-lg':true,
			'active':this.props.tempFormat==='celsius'
		})
		const fahrenheitClasses = classNames({
			'btn':true,
			'btn-lg':true,
			'btn-light':true,
			'active':this.props.tempFormat==='fahrenheit'
		})

		return(
			<span>
				<div className ="btn-group" style={{'background-color':'grey'}} >
					<button className = "btn btn-light" onClick={this.props.handleCityChange} >
						Change City
					</button>
					<button className="btn" onClick={this.props.handleRefresh} >
						<i className="fa fa-refresh fa-1x" aria-hidden="true"></i>
					</button>
					<span className="btn-group btn-group-toggle" data-toggle="buttons" >
					<label className={celsiusClasses} onClick={this.props.handleCelsiusChange} ><input type="radio" name="temp" id="celsius" autoComplete="off" defaultChecked/> C </label>
					<label className={fahrenheitClasses} onClick={this.props.handleFahrenheitChange} ><input type="radio" name="temp" id="Fahrenheit" autoComplete="off"/> F </label>
					</span>
				</div>
				{!this.props.isFetching && <div>
					<span>
						<p>Temperature: {this.props.temp}</p>
					</span>
					<i className={statusClasses}></i>
				</div>}
				{this.props.isFetching && <div>
					<img src={fetchLoader} alt="spinner" ></img>
				</div>}
				{this.props.isChangingCity && <div>
					<div className="btn-group row">
						<input type="text" onChange={this.props.handleCityInputChange} onKeyUp={this.props.handleCityKey} className="col-md-8" />
						<button type="submit" onClick={this.props.handleCityClick} className="btn btn-success">Submit</button>
					</div>	
				</div>}
			</span>
		);
	}
}

Weather.propTypes = {
	city:PropTypes.string.isRequired,
	temp:PropTypes.number.isRequired,
	status:PropTypes.string.isRequired,
	tempFormat:PropTypes.string,
	isFetching:PropTypes.bool,
	isChangingCity:PropTypes.bool,
	handleCityChange:PropTypes.func,
    handleRefresh:PropTypes.func,
    handleCelsiusChange:PropTypes.func,
    handleFahrenheitChange:PropTypes.func,
    handleCityClick:PropTypes.func,
    handleCityKey:PropTypes.func,
    handleCityInputChange:PropTypes.func
}

export default Weather