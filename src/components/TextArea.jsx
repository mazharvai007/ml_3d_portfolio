import React from 'react';

const TextArea = ({ label, className, ...props }) => {
	return (
		<label className="text-black-500 font-semibold">
			{label}
			<textarea className={className} {...props} />
		</label>
	);
};

export default TextArea;
