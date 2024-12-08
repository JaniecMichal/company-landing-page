import { COMPLETED_PROJECTS, ONGOING_PROJECTS } from "./data";

import { SectionLayout } from "../design-system/section-layout/layout";
import { ProjectsList } from "./listing";

export const Projects = () => {
	return (
		<SectionLayout
			sectionTitle="Projects"
			sectionHref={"/"}
			sectionRedirectButtonText="See more projects"
		>
			<div>
				<ProjectsList listTitle="Ongoing projects" projects={ONGOING_PROJECTS} />
				<ProjectsList listTitle="Completed projects" projects={COMPLETED_PROJECTS} />
			</div>
		</SectionLayout>
	);
};
