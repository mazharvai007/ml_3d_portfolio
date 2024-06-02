import { useRef, useState } from 'react';
import { TextInput, TextArea, Button } from '../components';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);

	const handleChange = () => {};
	const handleFocus = () => {};
	const handleBlur = () => {};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="relative flex lg:flex-row flex-col max-container">
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">Get in Touch</h1>
				<form
					className="w-full flex flex-col gap-7 mt-14"
					ref={formRef}
					onSubmit={handleSubmit}
				>
					<TextInput
						label="Name"
						type="text"
						name="email"
						className="input"
						value={form.name}
						placeholder="John"
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<TextInput
						label="Email"
						type="email"
						name="email"
						className="input"
						value={form.email}
						placeholder="John@gmail.com"
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<TextArea
						label="Your Message"
						name="message"
						className="textarea"
						row="4"
						value={form.message}
						placeholder="Write your thoughts here..."
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>

					<Button
						type="submit"
						className="btn"
						onFocus={handleFocus}
						onBlur={handleBlur}
						loading={loading}
					/>
				</form>
			</div>
			<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"></div>
		</section>
	);
};

export default Contact;
