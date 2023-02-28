import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';
import { Header } from './../../../features/header/Header';
import { Sidebar } from './../../../features/sidebar/Sidebar';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('layout')}>
			<Header />
			<Sidebar />
			<main className={cx('layout__main')}>{children}</main>
		</div>
	);
};
