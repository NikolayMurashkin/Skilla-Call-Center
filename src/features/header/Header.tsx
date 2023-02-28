import classNames from 'classnames/bind';

import styles from './Header.module.scss';

export const Header = () => {
	const cx = classNames.bind(styles);

	return (
		<header className={cx('header')}>
			<time className={cx('header__date')}>Среда, 13 окт</time>
			<div className={cx('header__info')}></div>
		</header>
	);
};
