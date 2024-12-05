import type { HeadingProps } from "./types";

export const SubHeading = ({ text, color }: HeadingProps) => {
	const textColor = color || "text-gray-800";
	return (
		<h2 className={`font-think mb-4 text-2xl ${textColor} md:text-3xl lg:text-4xl`}>{text}</h2>
	);
};
