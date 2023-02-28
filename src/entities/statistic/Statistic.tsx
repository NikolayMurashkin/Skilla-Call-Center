import classNames from 'classnames/bind';

import styles from './Statistic.module.scss';
import { IStatisticProps } from './Statistic.props';

export const Statistic: React.FC<IStatisticProps> = ({}) => {
	const cx = classNames.bind(styles);

	return <div className={cx('statistic')}>
		<span className={cx('statistic__text')}>{text}</span>
		<span className={cx('statistic__progress')}></span>
	</div>;
};
