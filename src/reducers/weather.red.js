import { REFRESH, UPDATED, CHANGEWEATHER, CHANGETEMPFORMAT, CHANGECITY, ISCHANGINGCITY, SETINPUTVALUE } from '../actions/weather.act.js'

export const weather = (state = {}, action) => {
    switch (action.type) {
        case REFRESH:
            return (Object.assign({}, state, {
                weather: Object.assign({}, state.weather, {
                    isFetching: true
                })
            }));
        case CHANGEWEATHER:
            return (Object.assign({}, state, {
                weather: Object.assign({}, state.weather, Object.assign({}, state.weather.weather, {
                    city: action.city,
                    temp: action.temp,
                    status: action.status
                }))
            }));
        case UPDATED:
            return (Object.assign({}, state, {
                weather: Object.assign({}, state.weather, {
                    lastUpdated: action.date,
                    isFetching: false
                }, {
                    weather: Object.assign({}, state.weather.weather, {
                        temp: action.response.main.temp,
                        status: action.response.weather[0].main.toLowerCase()
                    })
                })
            }));
        case CHANGETEMPFORMAT:
            return (Object.assign({}, state, Object.assign({}, state.weather, {
                format: action.format.toLowerCase()
            })))
        case CHANGECITY:
            return (Object.assign({}, state, {
                weather: Object.assign({}, state.weather, Object.assign({}, state.weather.weather, {
                    city: action.city
                }))
            }))
        case ISCHANGINGCITY:
            return (Object.assign({}, state, Object.assign({}, state.weather, {
                ISCHANGINGCITY: action.val
            })))
        case SETINPUTVALUE:
            return (Object.assign({}, state, Object.assign({}, state.weather, {
                inpVal: action.inpVal
            })))
        default:
            return state
    }
}