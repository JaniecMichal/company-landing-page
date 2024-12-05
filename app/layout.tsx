import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/design-system/header";
import { Footer } from "@/components/design-system/footer";

import "./globals.css";
import { Hero } from "@/components/design-system/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Solution Forge | Transform idea in to real solution",
	description:
		"We helping transforming your idea in to real working applications or website. Thanks flexible approach we can prepare for you the best solution which you need. ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-gray-900 ${inter.className}`}>
				<div className="max-w-8xl mx-autopx-4 relative sm:px-6 lg:px-12">
					<Hero />

					<Header />

					<main className="pb-8 pt-[600px]">{children}</main>

					<Footer />
				</div>
			</body>
		</html>
	);
}
