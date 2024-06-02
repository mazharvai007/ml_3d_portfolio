import { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { TextInput, TextArea, Button, Loader } from '../components';
import { Canvas } from '@react-three/fiber';
import { Fox } from '../models';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState('idle');

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleFocus = () => setCurrentAnimation('walk');
	const handleBlur = () => setCurrentAnimation('idle');

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setCurrentAnimation('hit');

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Mazharul Islam',
					from_email: form.email,
					to_email: 'mitutul87@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setLoading(false);

				// TODO: Show success message
				// TODO: Hide an alert

				setTimeout(() => {
					setCurrentAnimation('idle');
					setForm({ name: '', email: '', message: '' });
				}, [3000]);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);

				// TODO: Show error message
			});
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
						name="name"
						className="input"
						value={form.name}
						placeholder="John"
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						required
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
						required
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
						required
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
			<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
				<Canvas
					camera={{
						position: [0, 0, 5],
						fov: 75,
						near: 0.1,
						far: 1000,
					}}
				>
					<directionalLight intensity={2.5} position={[0, 0, 1]} />
					<ambientLight intensity={1} />
					<Suspense fallback={<Loader />}>
						<Fox
							currentAnimation={currentAnimation}
							position={[0.5, 0.35, 0]}
							rotation={[12.6629, -0.6, 0]}
							scale={[0.5, 0.5, 0.5]}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Contact;
