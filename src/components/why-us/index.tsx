import { SectionLayout } from "../section-layout/layout";
import { reasons } from "./data";

export const WhyUs = () => {
	return (
		<SectionLayout sectionTitle="Why You should choose Us?">
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{reasons.map((reason, index) => (
					<li key={index} className="rounded-lg bg-gray-800 p-6">
						<div className="flex items-start">
							<span>{reason.icon}</span>
							<div className="ml-4">
								<h4 className="mb-2 text-xl font-semibold text-white">{reason.title}</h4>
								<p className="text-sm text-gray-400">{reason.description}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</SectionLayout>
	);
};
