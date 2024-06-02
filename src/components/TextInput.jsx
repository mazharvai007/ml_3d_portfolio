import React from 'react';

const TextInput = ({ label, className, ...props }) => {
	return (
		<label className="text-black-500 font-semibold">
			{label}
			<input className={className} {...props} />
		</label>
	);
};

export default TextInput;
