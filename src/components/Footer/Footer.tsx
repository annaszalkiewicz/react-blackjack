import React, { Component } from 'react';
import './Footer.scss';

type MyState = {
	date: number;
};

class Footer extends Component {
	state: MyState = {
		date: new Date().getFullYear(),
	};
	render() {
		return (
			<footer className='footer'>
				<div className='footer-left'>
					<p>Copyright &copy; {this.state.date} All rights reserved.</p>
				</div>
				<div className='footer-right'>
					<p>
						{' '}
						Designed &amp; developed by{' '}
						<a
							href='https://mywebgraphicdesign.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Anna Szałkiewicz
						</a>
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
