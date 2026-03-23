import Link from "next/link";
import Image from "next/image";
import { PuzzleIcon, ServerIcon, Globe2Icon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
	{
		icon: (
			<PuzzleIcon
				size={24}
				strokeWidth={2}
				className="text-white"
				aria-label="Minecraft Plugins Feature Icon"
			/>
		),
		title: "Minecraft Plugins",
		desc: "Unique and custom Minecraft plugins — enhance gameplay, improve mechanics, and deliver new experiences for your community.",
	},
	{
		icon: (
			<ServerIcon
				size={24}
				strokeWidth={2}
				className="text-white"
				aria-label="Minecraft Servers Feature Icon"
			/>
		),
		title: "Minecraft Server Projects",
		desc: "Engaging server-side development: minigames, gamemodes, tools, events, and technical server optimizations — not hosting.",
	},
	{
		icon: (
			<Globe2Icon
				size={24}
				strokeWidth={2}
				className="text-white"
				aria-label="Websites Feature Icon"
			/>
		),
		title: "Web & App Development",
		desc: "Sleek, performant sites and bespoke interfaces. We create custom UIs, dashboards, control panels, and web tools tailored to your needs.",
	},
	{
		icon: (
			<SparklesIcon
				size={24}
				strokeWidth={2}
				className="text-white"
				aria-label="Custom Software Feature Icon"
			/>
		),
		title: "Custom Solutions & Integrations",
		desc: "From bots to automation, Discord integrations to mods — we solve tough software problems and build what others can't.",
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-black px-0 font-sans flex flex-col items-center justify-start">
			{/* Hero Section with styling to match Navbar */}
			<section className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center mt-12 mb-24 px-6">
				<div className="flex flex-col items-center mb-9">
					<Link
						href="/"
						className="flex items-center gap-2 font-extrabold text-lg md:text-xl tracking-tight mb-5 transition focus:outline-none"
						aria-label="DevFlare Home"
					>
						<Image
							src="/logo.svg"
							alt="DevFlare Logo"
							width={48}
							height={48}
							className="inline-block"
							priority
						/>
						<span className="hidden sm:inline text-white text-xl md:text-2xl font-extrabold tracking-tight">
							DevFlare
						</span>
					</Link>
					<h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
						Ideas. Code. <span className="text-primary">Delivered</span>
					</h1>
					<p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto font-normal mb-7">
						A passionate <span className="text-white/90 font-semibold">development team</span> creating custom software,
						websites, and gaming projects.<br className="hidden md:inline" />
						<span className="text-white/80">
							Tell us your vision — we build it, from prototype to production.
						</span>
					</p>
					<Button size="lg">Start a Project</Button>
				</div>
			</section>

			{/* Features Grid */}
			<section className="w-full max-w-4xl pb-10 px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="flex items-start gap-4 border border-neutral-800 bg-black/60 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-white/40 transition-colors"
						>
							<div className="shrink-0 bg-black border border-neutral-800 rounded-lg p-2 flex items-center justify-center">
								{feature.icon}
							</div>
							<div>
								<h3 className="font-extrabold text-lg md:text-xl text-white mb-1 tracking-tight">
									{feature.title}
								</h3>
								<p className="text-neutral-400 text-sm md:text-base">
									{feature.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="w-full flex flex-col items-center pt-10 pb-4 border-t border-neutral-800 mt-auto bg-black">
				<span className="text-neutral-600 text-xs mb-1">
					© {new Date().getFullYear()} DevFlare. All rights reserved.
				</span>
				<Link
					href="https://github.com/IMDevFlare"
					target="_blank"
					className="text-neutral-500 hover:text-white underline underline-offset-2 transition text-xs"
					aria-label="DevFlare GitHub"
				>
					GitHub
				</Link>
			</footer>
		</main>
	);
}
