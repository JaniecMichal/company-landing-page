"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const code = `
   Ready to turn your dreams into a tangible product? We're here to help.
`;

export const CodeAnimation = () => {
	const [displayedCode, setDisplayedCode] = useState("");
	const controls = useAnimation();

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			setDisplayedCode(code.substring(0, currentIndex));
			currentIndex++;
			if (currentIndex > code.length) {
				clearInterval(interval);
			}
		}, 50); // Szybkość pisania

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		controls.start({
			opacity: [0, 1, 1, 1],
			transition: { duration: 1 },
		});
	}, [controls]);

	return (
		<div className="mt-5 w-96 overflow-hidden rounded-lg bg-gray-200 shadow-md">
			<div className="flex items-center p-2">
				<div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
				<div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
				<div className="h-3 w-3 rounded-full bg-green-500"></div>
				<span className="ml-auto">index.js</span>
			</div>
			<div className="px-4 py-3 font-mono text-sm leading-6">
				<motion.div animate={controls}>
					<span className="text-gray-600">{displayedCode}</span>
					<span className="animate-blink inline-block h-5 w-1.5 bg-blue-500" /> {/* Kursor */}
				</motion.div>
			</div>
		</div>
	);
};
