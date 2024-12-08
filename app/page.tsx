import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Technologies } from "@/components/technologies";
import { WhyUs } from "@/components/why-us";

export default async function Home() {
	return (
		<section className="py-12">
			<Services />
			<Technologies />
			<WhyUs />
			<Projects />
			<Team />
		</section>
	);
}
