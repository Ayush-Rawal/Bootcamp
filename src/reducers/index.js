import { combineReducers } from 'redux'
import { weather } from './weather.red'

export const rootRed = combineReducers(weather);