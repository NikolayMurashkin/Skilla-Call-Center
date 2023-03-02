import classNames from 'classnames/bind';
import { useRef } from 'react';

import styles from './Header.module.scss';
import { Statistic } from './../../entities/statistic/Statistic';
import { SearchIcon } from './../../shared/ui/Icons/SearchIcon';
import { ClearIcon } from './../../shared/ui/Icons/ClearIcon';
import { ArrowIcon } from './../../shared/ui/Icons/ArrowIcon';

export const Header = () => {
	const cx = classNames.bind(styles);

	const searchRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const infoRef = useRef<HTMLDivElement>(null);

	const handleSearchOpen = () => {
		searchRef.current?.classList.toggle(cx('active'));
		inputRef.current?.classList.toggle(cx('active'));
		infoRef.current?.classList.toggle(cx('active'));
		inputRef.current?.focus();
	};
	const handleSearchClear = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	return (
		<header className={cx('header')}>
			<time className={cx('header__date')}>Среда, 13 окт</time>
			<div className={cx('header__info')} ref={infoRef}>
				<Statistic
					currentValue={20}
					maxValue={30}
					text={'Новые звонки'}
					type={'newCalls'}
				/>
				<Statistic
					currentValue={40}
					maxValue={100}
					text={'Качество разговоров'}
					type={'quality'}
				/>
				<Statistic
					currentValue={67}
					maxValue={100}
					text={'Конверсия в заказ'}
					type={'conversion'}
				/>
			</div>
			<div className={cx('header__controls')}>
				<div className={cx('header__search')} ref={searchRef}>
					<input
						type='text'
						className={cx('header__search_input')}
						ref={inputRef}
					/>
					<SearchIcon
						className={cx('header__search_icon')}
						onClick={handleSearchOpen}
					/>
					<ClearIcon
						className={cx('header__search_clear')}
						onClick={handleSearchClear}
					/>
				</div>
				<div className={cx('header__select')}>
					<span className={cx('header__select_option')}>
						ИП Сидорова Александра Михайловна
					</span>
					<ArrowIcon className={cx('header__arrow')} />
				</div>
				<div className={cx('header__user')}>
					<img
						src='/images/img.png'
						alt='user avatar'
						className={cx('header__user_img')}
					/>
					<ArrowIcon className={cx('header__arrow')} />
				</div>
			</div>
		</header>
	);
};
