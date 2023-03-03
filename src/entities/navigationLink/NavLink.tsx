import classNames from 'classnames/bind';

import styles from './NavLink.module.scss';
import { INavLinkProps } from './NavLink.props';

export const NavLink: React.FC<INavLinkProps> = ({ text, icon }) => {
	const cx = classNames.bind(styles);

	return (
		<li className={cx('nav-link')}>
			<a href='#'>
				{icon}
				<span className={cx('nav-link__text')}>{text}</span>
			</a>
		</li>
	);
};
