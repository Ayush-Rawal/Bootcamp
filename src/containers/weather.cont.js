import { refresh, changeCity, updated, changeWeather, changeTempFormat, getWeather } from '../actions/weather.act'

const mapStateToProps = (state) => ({
    status: "",
    tempFormat: "",
    temp: ,
    isFetching: ,
    isChangingCity
})

const mapDispatchPorps = (state) => ({
    handleCityChange: ,
    handleRefresh,
    handleCelsiusChange,
    handleFahrenheitChange,
    handleCityClick,
    handleCityKey,
    handleCityInputChange,
})