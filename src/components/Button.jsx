import React from 'react';

const Button = ({ className, loading, ...props }) => {
	return (
		<button className={className} {...props} disabled={loading}>
			{loading ? 'Sending...' : 'Submit'}
		</button>
	);
};

export default Button;
