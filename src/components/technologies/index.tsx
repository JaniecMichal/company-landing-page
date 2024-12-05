"use client";

import React from "react";
import { SectionLayout } from "../section-layout/layout";

import { technologies } from "./data";

import "./style.css";

export const Technologies = () => {
	return (
		<SectionLayout sectionTitle="Technologies We Use">
			<ul className="grid grid-cols-3 gap-6 md:grid-cols-5 lg:grid-cols-10">
				{technologies.map((tech, index) => (
					<li key={index} className="group relative">
						<div className="technologies-icon-wrapper mx-auto flex h-24 w-24 items-center justify-center rounded-lg bg-blue-800 text-gray-300 transition-colors duration-200">
							{tech.icon}
						</div>
						<div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-4 transform opacity-0 transition-opacity duration-200 group-hover:opacity-100">
							<div className="rounded-lg bg-gray-800 px-2 py-1 text-sm text-white shadow-lg">
								{tech.name}
							</div>
						</div>
					</li>
				))}
			</ul>
		</SectionLayout>
	);
};
