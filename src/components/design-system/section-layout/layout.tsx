import { Route } from "next";
import Link from "next/link";
import { SectionHeader } from "./header";

type SectionLayoutProps = {
	sectionTitle: string;
	children: JSX.Element;
	sectionHref?: Route;
	sectionRedirectButtonText?: string;
};

export const SectionLayout = ({
	sectionTitle,
	children,
	sectionHref,
	sectionRedirectButtonText,
}: SectionLayoutProps) => {
	return (
		<article className="mb-12">
			<SectionHeader title={sectionTitle} />
			<div className="container mx-auto px-4 md:px-6 lg:px-8">{children}</div>
			{sectionHref && (
				<div className="mt-12 text-center">
					<Link
						href={sectionHref}
						className="font-large inline-block rounded-lg bg-gray-700 px-8 py-3 text-white transition duration-200 hover:bg-gray-800"
					>
						{sectionRedirectButtonText || "Read more"}
					</Link>
				</div>
			)}
		</article>
	);
};
