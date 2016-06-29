import * as React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import * as _ from 'lodash';

interface ChartProps {
  data: Array<number>;
  color: string;
  units: string;
}

export default class Chart extends React.Component<ChartProps, any> {

  private avg() {
    return _.round(_.sum(this.props.data) / this.props.data.length);
  }

  public render() {
    return (
      <div>
        <Sparklines data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{ this.avg() } {this.props.units}</div>
      </div>
    );
  }
}
