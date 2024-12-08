"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import placeholderImg from "@/assets/project-placeholder.jpeg";
import { Project } from "./types";

type ProjectsListProps = {
	listTitle: string;
	projects: Project[];
};

export const ProjectsList = ({ listTitle, projects }: ProjectsListProps) => {
	return (
		<>
			<h4 className="mb-6 mt-12 text-2xl font-semibold text-white">{listTitle}</h4>
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<motion.li
						key={index}
						className="group relative overflow-hidden rounded-lg bg-gray-800 p-6"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
					>
						<Image
							src={project.image || placeholderImg}
							alt={project.title}
							width={600}
							height={300}
							className="mb-4 rounded-lg"
						/>
						<h5 className="mb-2 text-xl font-semibold text-white">{project.title}</h5>
						<p className="mb-4 text-sm text-gray-400">{project.description}</p>
						<div className="mb-4 flex flex-wrap gap-2">
							{project.technologies.map((tech, techIndex) => (
								<span
									key={techIndex}
									className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-400"
								>
									{tech}
								</span>
							))}
						</div>
						<button className="absolute bottom-4 right-4 rounded-lg bg-blue-500 px-4 py-2 text-white opacity-100 transition-colors duration-200 hover:bg-blue-600">
							See live
						</button>
					</motion.li>
				))}
			</ul>
		</>
	);
};
