import { CodeAnimation } from "../code-animation";
import { MainHeading, SubHeading } from "../headings";
import { Highlight } from "../highlight";

export const Hero = () => {
	return (
		<div className="absolute left-0 top-0 z-0 h-[600px] w-screen overflow-hidden bg-gray-800 text-slate-300">
			<div className="container mx-auto flex h-[100%] flex-col items-center justify-center px-4 py-16 md:px-6 lg:px-8">
				<MainHeading
					color="text-slate-200"
					text={
						<>
							Solution{" "}
							<Highlight className="text-blue-500" hideLine>
								Forge
							</Highlight>
						</>
					}
				/>
				<SubHeading
					text="We helping transforming your idea in to amazing applications "
					color="text-slate-200"
				/>

				<CodeAnimation />
			</div>
		</div>
	);
};
