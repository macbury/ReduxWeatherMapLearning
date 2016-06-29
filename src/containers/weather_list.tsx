import * as React from 'react';
import { City, Forecast, HourStats } from "../reducers/reducer_weather";
import { connect } from "react-redux";
import { AppState } from "../reducers";
import Chart from '../components/chart';

interface WeatherListProps {
  weather?: Array<Forecast>
}

class WeatherList extends React.Component<WeatherListProps, any> {

  private renderWeather(forecast : Forecast) {
    console.log(forecast);
    let temperature = forecast.list.map(( stat : HourStats ) => {
      return stat.temp.day;
    });

    let pressure    = forecast.list.map(( stat : HourStats ) => {
      return stat.pressure;
    });

    let humidity    = forecast.list.map(( stat : HourStats ) => {
      return stat.humidity;
    });

    return (
      <tr key={forecast.city.id}>
        <td>
          { forecast.city.name }
        </td>
        <td>
          <Chart data={temperature} color="blue" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="orange" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    );
  }

  public render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{ this.props.weather.map(this.renderWeather.bind(this)) }</tbody>
      </table>
    );
  }
}

function mapPropsToState(state : AppState) : WeatherListProps {
  return {
    weather: state.weather
  };
}

export default connect(mapPropsToState)(WeatherList);
