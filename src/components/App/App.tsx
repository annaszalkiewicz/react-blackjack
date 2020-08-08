import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Home />
			</main>
      <Footer />
		</div>
	);
};

export default App;
