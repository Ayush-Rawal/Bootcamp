import { REFRESH, CHANGCITY, CHANGESTATUS } from '../actions/weather.act.js'

const weather = (state = [], action) => {
    switch (action.type) {
        case REFRESH:
            return (Object.assign({}, state, getWeather(action.city)))
        case CHANGCITY:
            return (Object.assign({}, state, { city: action.city }))
        case CHANGESTATUS:
            return (Object.assign({}, state, { status: action.status }))
        default:
            return state
    }
}