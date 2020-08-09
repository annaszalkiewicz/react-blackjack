import React from 'react';
import './Header.scss';
import { RootState } from '../../store/reducers/rootReducer';
import { useSelector } from 'react-redux';

const Header = () => {
	const user = (state: RootState) => state.user;
	const props = useSelector(user);
	return (
		<header className='header'>
			<h1>Twenty-One Game</h1>
			{props.isLoggedIn && <p>Welcome, {props.nickname}!</p>}
		</header>
	);
};

export default Header;
