import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import {
	CallsIcon,
	ContrAgentsIcon,
	DocumentsIcon,
	KnowledgeIcon,
	Logo,
	MessagesIcon,
	OrdersIcon,
	PerformersIcon,
	ReportsIcon,
	ResutsIcon,
	SettingsIcon,
} from '../../shared/ui/Icons/';
import { NavLink } from '../../entities/navigationLink/NavLink';

export const Sidebar = () => {
	const cx = classNames.bind(styles);

	return (
		<aside className={cx('sidebar')}>
			<a href='#'>
				<Logo className={cx('sidebar__logo')} />
			</a>
			<nav className={cx('sidebar__navigation')}>
				<ul className={cx('sidebar__links')}>
					<NavLink text='Итоги' icon={<ResutsIcon />} />
					<NavLink text='Заказы' icon={<OrdersIcon />} />
					<NavLink text='Сообщения' icon={<MessagesIcon />} />
					<NavLink text='Звонки' icon={<CallsIcon />} />
					<NavLink text='Контрагенты' icon={<ContrAgentsIcon />} />
					<NavLink text='Документы' icon={<DocumentsIcon />} />
					<NavLink text='Исполнители' icon={<PerformersIcon />} />
					<NavLink text='Отчеты' icon={<ReportsIcon />} />
					<NavLink text='База знаний' icon={<KnowledgeIcon />} />
					<NavLink text='Настройки' icon={<SettingsIcon />} />
				</ul>
			</nav>
		</aside>
	);
};
