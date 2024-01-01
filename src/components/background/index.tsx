import React from 'react';
import './style.scss';

const Background: React.FC = () => {
	const squareList: Array<string> = ['1', '2', '3'];
	const circleList: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8'];
	return (
		<div className={'bg'}>
			{squareList.map((item) => {
				return <span className={['bg-square', `bg-square--${item}`].join(' ')}/>
			})}
			{circleList.map((item) => {
				return <span className={['bg-circle', `bg-circle--${item}`].join(' ')}/>
			})}
		</div>
	);
}

export default Background;
