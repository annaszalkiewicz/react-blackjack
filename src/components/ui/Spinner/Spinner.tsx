import React from 'react';

import './Spinner.scss';

const Spinner = () => {
	return (
		<div className='spinner'>
			<span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='28'
					height='28'
					viewBox='0 0 28 28'
					focusable='false'
				>
					<circle
						cx='14'
						cy='14'
						r='12'
						fill='none'
						stroke='#000'
						strokeWidth='4'
						opacity='.15'
					/>
					<circle
						pathLength='1'
						cx='14'
						cy='14'
						r='12'
						fill='none'
						stroke='#023328'
						strokeWidth='4'
						strokeDasharray='27 57'
						strokeLinecap='square'
						strokeLinejoin='inherit'
					/>
				</svg>
			</span>
		</div>
	);
};

export default Spinner;
