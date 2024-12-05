import {
	AdjustmentsHorizontalIcon,
	ChartBarSquareIcon,
	ChatBubbleBottomCenterTextIcon,
	LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { SparklesIcon } from "lucide-react";

export const reasons = [
	{
		title: "Tailored Solutions",
		description:
			"We don't believe in one-size-fits-all solutions. We take the time to understand your unique needs and craft a solution that perfectly aligns with your vision and goals.",
		icon: <AdjustmentsHorizontalIcon className="h-12 w-12 text-blue-500" />,
	},
	{
		title: "End-to-End Support",
		description:
			"From the initial consultation to project launch and beyond, we're with you every step of the way. Our dedicated support ensures a smooth and hassle-free experience.",
		icon: <LifebuoyIcon className="h-12 w-12 text-blue-500" />,
	},
	{
		title: "Rapid Prototyping",
		description:
			"We believe in bringing ideas to life quickly. Our rapid prototyping and Proof of Concept (PoC) development help you validate your concepts and accelerate your time to market.",
		icon: <SparklesIcon className="h-12 w-12 text-blue-500" />,
	},
	{
		title: "Experience that Scales",
		description:
			"We've tackled complex projects and built interfaces for large-scale user bases. You can trust us to deliver high-performance solutions that can handle your growth.",
		icon: <ChartBarSquareIcon className="h-12 w-12 text-blue-500" />,
	},
	{
		title: "Open Communication",
		description:
			"We believe in transparency and open communication. We keep you informed throughout the process, ensuring that you're always in the loop and involved in key decisions.",
		icon: <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-500" />,
	},
];
