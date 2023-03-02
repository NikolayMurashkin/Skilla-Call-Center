import classNames from 'classnames/bind';

import styles from './Statistic.module.scss';
import { IStatisticProps } from './Statistic.props';

export const Statistic: React.FC<IStatisticProps> = ({
	text,
	maxValue,
	currentValue,
	type,
}) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('statistic')}>
			{type === 'newCalls' && (
				<span className={cx('statistic__text')}>
					{text}{' '}
					<strong
						className={cx(
							'statistic__value',
							'statistic__value_green'
						)}
					>
						{currentValue} из {maxValue} шт
					</strong>
				</span>
			)}
			{type !== 'newCalls' && (
				<span className={cx('statistic__text')}>
					{text}{' '}
					<strong
						className={cx('statistic__value', {
							statistic__value_red: type === 'conversion',
							statistic__value_yellow: type === 'quality',
						})}
					>
						{currentValue}%
					</strong>
				</span>
			)}

			<progress
				max={maxValue}
				value={currentValue}
				className={cx('statistic__progress', {
					statistic__progress_green: type === 'newCalls',
					statistic__progress_yellow: type === 'quality',
					statistic__progress_red: type === 'conversion',
				})}
			></progress>
		</div>
	);
};
