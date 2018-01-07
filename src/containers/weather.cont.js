import { refresh, changeCity, updated, changeWeather, changeTempFormat, getWeather, isChangingCity, setInpVal } from '../actions/weather.act'
import { connect } from 'react-redux'
// import { Weather } from '../components/weather'

const mapStateToProps = (state) => ({
    status: state.weather.weather.status,
    tempFormat: state.weather.format,
    temp: state.weather.weather.temp,
    isFetching: state.weather.isFetching,
    isChangingCity: state.weather.isChangingCity
})

const mapDispatchToProps = (dispatch) => ({
    handleCityChange: () => dispatch(isChangingCity(true)),
    handleRefresh: () => {
        // dispatch(refresh());
        return getWeather();
    },
    handleCelsiusChange = () => dispatch(changeTempFormat('celsius')),
    handleFahrenheitChange = () => dispatch(changeTempFormat('fahrenheit')),
    handleCityClick = (city) => dispatch(changeCity(city)),
    handleCityKey = (evt) => {
        if (evt.key === 'Enter')
            return dispatch(changeCity(store.getState().weather.inpVal))
        else if (evt.key === 'Escape')
            return dispatch(isChangingCity(false))
    },
    handleCityInputChange = (val) => dispatch(setInpVal(val)),
})

const weather = connect(mapStateToProps, mapDispatchToProps)(Weather)

export default weather