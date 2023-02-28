import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	const cx = classNames.bind(styles);

	return <aside className={cx('sidebar')}>Sidebar</aside>;
};
