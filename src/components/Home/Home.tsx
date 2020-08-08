import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from '../../store/actions/user';
import './Home.scss';

const Home = () => {
	const [nickname, changeInput] = useState('');

	const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		changeInput(e.target.value);
	};

	const dispatch = useDispatch();

	const submitFormHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(setUser(nickname));
	};

	return (
		<section className='welcome'>
			<div className='welcome-intro'>
				<h2 className='welcome-heading'>Welcome to The Twenty-One Game!</h2>
				<ol className='welcome-list'>
					<li>Type your nickname</li>
					<li>Select game mode (1 player or multiplayers)</li>
				</ol>
				<p className='welcome-text'>Happy gaming!</p>
			</div>
			<div className='welcome-form'>
				<form>
					<div className='welcome-form-row'>
						<input
							type='text'
							name='name'
							id='name'
							required
							onChange={changeInputHandler}
							value={nickname}
						/>
						<label htmlFor='name'>Your nickname</label>
					</div>
					<div className='welcome-form-row welcome-buttons'>
						<button onClick={submitFormHandler}>Play with bot</button>
						<button>Play with other players</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Home;
