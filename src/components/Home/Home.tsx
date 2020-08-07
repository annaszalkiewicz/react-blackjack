import React from 'react';

const Home = () => {
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
      <div className="welcome-form">
        <form>
          <div className="welcome-form-row">
            <label htmlFor="name">Nickname</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="welcome-form-row">
            <button>Play with bot</button>
						<button>Play with other players</button>
          </div>
        </form>
      </div>
		</section>
	);
};

export default Home;
