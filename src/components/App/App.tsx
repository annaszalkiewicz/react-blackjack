import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Game from '../Game/Game';
import Footer from '../Footer/Footer';
import { RootState } from '../../store/reducers/rootReducer';
import './App.scss';

const App = () => {
	const user = (state: RootState) => state.user.isLoggedIn;
	const isLoggedIn = useSelector(user)
	
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Switch>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/`}
					render={() => <Home />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/game`}
					render={() => !isLoggedIn ? <Redirect to="/" /> : <Game />}
				/>
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default App;
