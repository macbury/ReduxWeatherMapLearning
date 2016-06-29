import { combineReducers } from "redux";
import reducerWeather from './reducer_weather';
import { Forecast } from "./reducer_weather";

export interface AppState {
  weather: Array<Forecast>;
}

export const reducers = combineReducers({
  weather: reducerWeather
});
