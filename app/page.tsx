import { MainHeading, SubHeading } from "@/components/headings";

export default async function Home() {
	return (
		<section className="h-52 bg-slate-600 py-12 pt-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<MainHeading text="Michal Janiec" />
			</div>
		</section>
	);
}
