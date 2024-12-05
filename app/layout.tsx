import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

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
			<body className={`bg-gray-200 text-gray-800 ${inter.className}`}>
				<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
					<Header />

					<main className="py-8">{children}</main>

					<Footer />
				</div>
			</body>
		</html>
	);
}
