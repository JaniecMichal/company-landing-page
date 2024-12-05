export const SectionHeader = ({ title }: { title: string }) => {
	return (
		<header className="container mx-auto mb-8 px-4 md:px-6 lg:px-8">
			<h3 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-3xl">
				{title}
			</h3>
			<div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
		</header>
	);
};
