import {
	CodeBracketIcon,
	BuildingLibraryIcon,
	ArrowPathRoundedSquareIcon,
	DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

//toDO move to some cms?
export const services = [
	{
		icon: <CodeBracketIcon className="h-10 w-10 text-blue-500" />,
		title: "Web Application Development",
		description:
			"We help you build robust and scalable web applications from ideation and business requirements to deployment and maintenance.",
	},
	{
		icon: <BuildingLibraryIcon className="h-10 w-10 text-blue-500" />,
		title: "Websites",
		description:
			"Crafting beautiful and functional websites and landing pages that engage your audience and drive conversions.",
	},
	{
		icon: <ArrowPathRoundedSquareIcon className="h-10 w-10 text-blue-500" />,
		title: "Landing Page Development",
		description:
			"Creating high-converting landing pages tailored to your specific marketing campaigns and target audience.",
	},
	{
		icon: <DevicePhoneMobileIcon className="h-10 w-10 text-blue-500" />,
		title: "Mobile App Development",
		description:
			"Developing native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences.",
	},
] as const;
