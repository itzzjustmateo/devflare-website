import Link from "next/link";

export default function HomePage() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 px-6">
			<div className="max-w-2xl w-full text-center space-y-10">
				{/* Logo / Name */}
				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
					DevFlare
				</h1>
				{/* Subtitle */}
				<p className="text-neutral-300 text-lg md:text-2xl font-medium italic max-w-xl mx-auto">
					Blazing fast, future-proof web experiences with Next.js, TailwindCSS &amp; thoughtful design.
				</p>
				{/* CTA Buttons */}
				<div className="flex flex-wrap items-center justify-center gap-5 pt-6">
					<Link
						href="#projects"
						className="px-7 py-3 rounded-2xl font-semibold border border-neutral-700 hover:bg-neutral-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-neutral-300"
					>
						View Projects
					</Link>
					<Link
						href="#contact"
						className="px-7 py-3 rounded-2xl border border-neutral-700 font-medium hover:bg-neutral-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-neutral-300"
					>
						Contact Us
					</Link>
				</div>
				{/* Quick About Section */}
				<div className="mt-6 text-neutral-400 text-md md:text-lg max-w-xl mx-auto">
					<span className="font-semibold text-neutral-200">Why DevFlare?</span>
					<br />
					We craft performant, accessible sites and apps, specializing in intuitive
					UIs and robust backend integration — for startups, creators, and ambitious companies.
				</div>
				{/* Footer */}
				<footer className="pt-10 text-neutral-600 text-sm flex flex-col items-center gap-1">
					<span>
						© {new Date().getFullYear()} DevFlare &mdash; All rights reserved.
					</span>
					<Link
						href="https://github.com/IMDevFlare"
						target="_blank"
						className="inline-flex items-center gap-1 text-neutral-400 hover:text-white underline underline-offset-2 transition-colors"
						aria-label="DevFlare GitHub"
					>
						<svg width="18" height="18" className="inline" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<title>GitHub</title>
							<path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.22c0 4.46 2.87 8.26 6.84 9.6.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.64.07-.63.07-.63 1 .08 1.53 1.04 1.53 1.04.89 1.57 2.33 1.12 2.9.86.09-.65.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.04 1-2.76-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.73 1.02A9.38 9.38 0 0 1 12 6.67c.84.004 1.68.12 2.46.35 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.62.72 1 1.64 1 2.76 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.48-.01 2.82 0 .27.18.58.69.48A10.04 10.04 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"/>
						</svg>
						GitHub
					</Link>
				</footer>
			</div>
		</main>
	);
}
