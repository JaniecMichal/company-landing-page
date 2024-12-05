import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";

export default async function Home() {
	return (
		<section className="py-12">
			<Services />
			<Technologies />
		</section>
	);
}
