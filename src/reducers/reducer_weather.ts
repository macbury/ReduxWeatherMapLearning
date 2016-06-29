import { FETCH_WEATHER } from "../actions";

export interface City {
  id: number;
  name: string;
  coord: { lat: number, lng: number }
}

export interface HourStats {
  temp: { day: number };
  humidity: number;
  pressure: number;
}

export interface Forecast {
  city: City;
  list: Array<HourStats>
}

export default function(state : Array<Forecast> = [], action : { type: string, payload: { data: Forecast } }) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }

  return state;
}
