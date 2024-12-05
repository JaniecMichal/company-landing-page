import { SectionHeader } from "./header";

type SectionLayoutProps = {
	sectionTitle: string;
	children: JSX.Element;
};

export const SectionLayout = ({ sectionTitle, children }: SectionLayoutProps) => {
	return (
		<article className="mb-12">
			<SectionHeader title={sectionTitle} />
			<div className="container mx-auto px-4 md:px-6 lg:px-8">{children}</div>
		</article>
	);
};
