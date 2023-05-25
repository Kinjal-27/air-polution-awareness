import React, { FC, useState } from 'react';
import Logo from 'assets/images/amcLogo.png';
import { AgencyIcon, Phone, Search } from 'shared/icons/icons';
import { NavLink } from 'react-router-dom';

import '../header/styles/header.scss';
import { debounce } from 'lodash';

const Header: FC = () => {
	const [searchQuestion, setSearchQuestion] = useState('');
	const handleSearch = (value: string) => {
		setSearchQuestion(value);
	};

	const handleNameSearch = debounce((value: string) => handleSearch(value));
	return (
		<div>
			<div className='main-header'>
				<div className='logo'>
					<img src={Logo} alt='logo' height={40} width={200} />
				</div>
				<div className='contact-detail--wrapper'>
					<div className='contact-inner-wrapper'>
						<div className='contact --link mr--10 flex justify-content--center align-items--center'>
							<Phone className='phone-svg mr--5' /> State Directory
						</div>
						<div className='contact--link'>
							<AgencyIcon className='agency-svg mr--5' /> State Agency
						</div>
					</div>
				</div>
			</div>
			<div className='header'>
				<div className='link-search--wrapper flex'>
					<div className='flex position--relative'>
						<input
							type='text'
							placeholder='Title'
							className='name-search'
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameSearch(e.target.value)}
						/>
						<Search className='search-icon position--absolute' />
					</div>
					<div className='links-wrapper'>
						<NavLink to='/' className='links'>
							Home
						</NavLink>
						<NavLink to='/' className='links'>
							Contact Us
						</NavLink>
						<NavLink to='/' className='links'>
							About Us
						</NavLink>
					</div>
				</div>
				<h3 className='text--white ml--20'>Air Polution Awareness Program By AMC</h3>
			</div>
		</div>
	);
};

export default Header;
