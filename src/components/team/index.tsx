"use client";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "./data";
import { SectionLayout } from "../design-system/section-layout/layout";
import { Img } from "../design-system/image";

export const Team = () => {
	return (
		<SectionLayout sectionTitle="Meet our team">
			<TeamListing />
		</SectionLayout>
	);
};

const TeamListing = () => {
	return (
		<ul className="grid grid-cols-2 gap-8">
			{TEAM_MEMBERS.map((member, index) => (
				<motion.li
					key={index}
					className="flex flex-col items-center gap-8 rounded-lg bg-gray-800 p-6 shadow-md transition-transform duration-300 hover:scale-105 md:flex-row" // Dodano flex-col i items-center
					whileHover={{ scale: 1.25, zIndex: 10 }}
				>
					<div className="md:w-1/3">
						<Img
							src={member.image}
							alt={member.name}
							width={300}
							height={300}
							className="mb-4 rounded-lg"
						/>
					</div>
					<div className="md:w-2/3">
						<h4 className="mb-2 text-2xl font-bold text-white">{member.name}</h4>
						<p className="mb-2 text-base font-semibold text-gray-400">{member.role}</p>
						<p className="mb-4 text-sm text-gray-400">{member.description}</p>
						<ul className="flex flex-wrap gap-2">
							{member.technologies.map((tech, techIndex) => (
								<li
									key={techIndex}
									className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-400"
								>
									{tech}
								</li>
							))}
						</ul>
					</div>
				</motion.li>
			))}
		</ul>
	);
};
