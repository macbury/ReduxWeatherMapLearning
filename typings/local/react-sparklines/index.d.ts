// Generated by typings
// Source: https://raw.githubusercontent.com/andrew-w-ross/typings-react-sparklines/a45359c3d5c043414840533761b7f8a85130641c/react-sparklines.d.ts
declare module '~react-sparklines/react-sparklines' {
import * as React  from 'react';
module sparkline {


	export interface ISparklinesProps {
		data: number[];

		limit?: number;

		width?: number;

		height?: number;

		margin?: number;

		min?: number;

		max?: number;
	}

	export class Sparklines extends React.Component<ISparklinesProps, {}>{ }

	export class SparklinesLine extends React.Component<{ color?: string, style?: React.CSSProperties }, {}>{ }

	export class SparklinesReferenceLine extends React.Component<{ type: string }, {}>{ }

	export class SparklinesNormalBand extends React.Component<{}, {}>{ }

	export class SparklinesSpots extends React.Component<{}, {}>{ }

	export class SparklinesBars extends React.Component<{}, {}>{ }
}

export = sparkline;
}
declare module 'react-sparklines/react-sparklines' {
import alias = require('~react-sparklines/react-sparklines');
export = alias;
}
declare module 'react-sparklines' {
import alias = require('~react-sparklines/react-sparklines');
export = alias;
}