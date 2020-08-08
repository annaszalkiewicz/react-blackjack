import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Home />
			</main>
		</div>
	);
};

export default App;
