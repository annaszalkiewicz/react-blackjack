import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setUser, isLoggedIn } from '../../store/actions/user';
import { isLoading } from '../../store/actions/ui';
import { RootState } from '../../store/reducers/rootReducer';

import './Home.scss';

const Home = () => {
	const [nickname, changeInput] = useState('');

	const user = (state: RootState) => state.user.isLoggedIn;
	const userIsLoggedIn = useSelector(user);

	const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		changeInput(e.target.value);
	};

	const dispatch = useDispatch();

	const submitFormHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(isLoading(true));
		dispatch(setUser(nickname));
		dispatch(isLoggedIn(true));
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
			{userIsLoggedIn && <Redirect to='/game' />}
		</section>
	);
};

export default Home;
