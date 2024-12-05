import { SiGithub, SiLinkedin } from "react-icons/si";

export const Socials = () => {
	return (
		<section className="z-10 flex space-x-4">
			<a href="#">
				<SiLinkedin className="h-6 w-6 text-gray-200 hover:text-blue-500" />
			</a>
			<a href="#">
				<SiGithub className="h-6 w-6 text-gray-200 hover:text-blue-500" />
			</a>
		</section>
	);
};
