export interface IStatisticProps {
	text: string;
	maxValue: number;
	currentValue: number;
	type: 'newCalls' | 'quality' | 'conversion';
}
