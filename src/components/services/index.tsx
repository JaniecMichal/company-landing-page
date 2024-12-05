import { SectionLayout } from "../design-system/section-layout/layout";
import { services } from "./data";

export const Services = () => {
	return (
		<SectionLayout sectionTitle="Our services">
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{services.map((service, index) => (
					<li key={index} className="rounded-lg bg-gray-800 p-6 text-center">
						{service.icon}
						<h4 className="mb-2 mt-4 text-xl font-semibold text-white">{service.title}</h4>
						<p className="text-sm text-gray-400">{service.description}</p>
					</li>
				))}
			</ul>
		</SectionLayout>
	);
};
