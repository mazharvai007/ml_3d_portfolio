import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
	return (
		<div className="info-box">
			<p className="font-medium sm:text-xl text-center">{text}</p>
			<Link to={link} className="neo-brutalism-white neo-btn">
				{btnText}
				<img
					src={arrow}
					alt="arrow"
					className="w-4 h-4 object-contain"
				/>
			</Link>
		</div>
	);
};

export default InfoBox;
