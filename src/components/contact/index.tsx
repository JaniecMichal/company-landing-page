import { SectionLayout } from "../design-system/section-layout/layout";

export const Contact = () => {
	return (
		<SectionLayout sectionTitle="Let's connect">
			<form className="mx-auto max-w-3xl">
				<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-400">
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div>
						<label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-400">
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
				<div className="mb-6">
					<label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-400">
						Message
					</label>
					<textarea
						id="message"
						rows={5}
						className="max-h-60 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition duration-200 hover:bg-blue-600"
					>
						Send Message
					</button>
				</div>
			</form>
		</SectionLayout>
	);
};
