import { Navbar } from "../navbar";
import { Socials } from "../socials";

export const Header = () => {
	return (
		<header className="z-10 flex flex-col items-center justify-between px-8 py-6 md:flex-row">
			<Navbar />
			<Socials />
		</header>
	);
};
