import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills } from '../constants';
import { CTA } from '../components';

const About = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				Hello, I'm{' '}
				<span className="blue-gradient_text font-semibold drop-shadow">
					Mazharul Islam
				</span>
			</h1>
			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					Front-end Developer based on Bangladesh, specializing in
					technical/customer support and building applications.
				</p>
			</div>

			<div className="py-10 flex-col">
				<h3 className="subhead-text">My Skills</h3>
				<div className="mt-16 flex flex-wrap gap-12">
					{skills.map((skill, index) => (
						<div
							className="block-container w-20 h-20"
							key={`mySkill-${skill + index}`}
						>
							<div className="btn-back rounded-xl" />
							<div className="btn-front rounded-xl flex justify-center items-center">
								<img
									src={skill.imageUrl}
									alt={skill.name}
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="py-16">
				<h3 className="subhead-text">Work Experience</h3>
				<div className="mt-5 flex flex-col gap-3 text-slate-500">
					<p>
						I've worked with all sorts of companies, leveling up my
						skills and teaming up with smart people. Here's the
						rundown:
					</p>
				</div>

				<div className="mt-12 flex">
					<VerticalTimeline>
						{experiences.map((expItem, index) => (
							<VerticalTimelineElement
								key={expItem.companyName + index}
								date={expItem.date}
								iconStyle={{ background: expItem.iconBg }}
								icon={
									<div className="flex justify-center items-center w-full h-full">
										<img
											src={expItem.icon}
											alt={expItem.companyName}
											className="w=[60%] h-[60%] object-contain"
										/>
									</div>
								}
								contentStyle={{
									borderBottom: '8px',
									borderStyle: 'solid',
									borderBottomColor: expItem.iconBg,
									boxShadow: 'none',
								}}
							>
								<div>
									<h3 className="text-black text-xl font-poppins font-semibold">
										{expItem.title}
									</h3>
									<p
										className="text-black-500 font-medium text-base m-0"
										style={{ margin: 0 }}
									>
										{expItem.companyName}
									</p>
								</div>

								<ul className="my-5 list-disc ml-5 space-y-2">
									{expItem.points.map((point, index) => (
										<li
											key={`exp-point-${index}`}
											className="text-black-500/50 font-normal text-sm"
										>
											{point}
										</li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>
			<hr className="border-slate-200" />

			<CTA />
		</section>
	);
};

export default About;
