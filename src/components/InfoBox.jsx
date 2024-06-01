import React from 'react';

const InfoBox = ({ text, link, btnText }) => {
	return (
		<div className="info-box">
			<p className="font-medium sm:text-xl text-center">{text}</p>
		</div>
	);
};

export default InfoBox;
