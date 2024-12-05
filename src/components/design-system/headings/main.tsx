import type { HeadingProps } from "./types";

export const MainHeading = ({ text, color }: HeadingProps) => {
	const textColor = color || "text-gray-800";
	return (
		<h1 className={`mb-4 text-4xl font-normal ${textColor} md:text-6xl lg:text-8xl`}>{text}</h1>
	);
};
