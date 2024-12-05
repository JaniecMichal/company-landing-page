import Image from "next/image";

import { Navbar } from "../navbar";
import { Socials } from "../socials";

import logo from "../../assets/logo.png";

export const Header = () => {
	return (
		<header className="flex flex-col items-center justify-between px-8 py-6 md:flex-row">
			<Navbar />
			<Image src={logo} width={80} height={80} alt="company-logo" />
			<Socials />
		</header>
	);
};
