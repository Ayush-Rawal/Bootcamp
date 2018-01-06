import { REFRESH, UPDATED, CHANGEWEATHER, CHANGETEMPFORMAT, CHANGECITY } from '../actions/weather.act.js'

const weather = (state = [], action) => {
    switch (action.type) {
        case REFRESH:
            return (Object.assign({}, state, { weather: Object.assign({}, state.weather, { isFetching: true }) }));
        case CHANGEWEATHER:
            return (Object.assign({}, state, { weather: Object.assign({}, state.weather, Object.assign({}, state.weather.weather, { city: action.city, temp: action.temp, status: action.status })) }));
        case UPDATED:
            return (Object.assign({}, state, { weather: Object.assign({}, state.weather, { isFetching: false }) }));
        case CHANGETEMPFORMAT:
            return (Object.assign({}, state, Object.assign({}, state.weather, { format: action.format.toLowerCase() })))
        case CHANGECITY:
            return (Object.assign({}, state, { weather: Object.assign({}, state.weather, Object.assign({}, state.weather.weather, { city: action.city })) }))
        default:
            return state
    }
}