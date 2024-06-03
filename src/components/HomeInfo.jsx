import React from 'react';
import InfoBox from './InfoBox';

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I am <span className="font-semibold">Mazharul Islam</span> 👏
			<br />A Front-End Developer from Bangladesh{' '}
			<span className="bg-slate-300 py-0 px-1 rounded-sm">🇧🇩</span>
		</h1>
	),
	2: (
		<InfoBox
			text="Worked with many companies and picked up many skills along the way"
			link="/about"
			btnText="Learn More"
		/>
	),
	3: (
		<InfoBox
			text="I have been responsible for the successful completion of multiple projects over the years. Are you curious about the impact of the projects?"
			link="/projects"
			btnText="Visit My Portfolio"
		/>
	),
	4: (
		<InfoBox
			text="Need a project done or looking for a dev? I'm just a few keystrokes away"
			link="/contact"
			btnText="Let's Talk"
		/>
	),
};

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default HomeInfo;
