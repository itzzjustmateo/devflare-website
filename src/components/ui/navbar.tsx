import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { LogOutIcon } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="w-full px-6 h-14 flex items-center justify-between border-b border-neutral-800 bg-black text-white font-sans">
			{/* Left: Logo (minimal, no color) */}
			<div className="flex items-center h-full">
				<Link
					href="/"
					className="flex items-center gap-2 font-extrabold text-lg md:text-xl tracking-tight"
				>
					<Image
						src="/logo.svg"
						alt="DevFlare Logo"
						width={35}
						height={35}
						className="inline-block"
					/>
					<span>DevFlare</span>
				</Link>
			</div>
			{/* Center: Nav Links */}
			<div className="flex-1 flex justify-center">
				<div className="flex gap-8">
					<Link
						href="/projects"
						className="text-neutral-400 hover:text-white px-2 py-1 text-sm font-medium transition-colors"
					>
						Projects
					</Link>
					<Link
						href="/gallery"
						className="text-neutral-400 hover:text-white px-2 py-1 text-sm font-medium transition-colors"
					>
						Gallery
					</Link>
					<Link
						href="/about"
						className="text-neutral-400 hover:text-white px-2 py-1 text-sm font-medium transition-colors"
					>
						About
					</Link>
				</div>
			</div>
			{/* Right: Sign Out Button */}
			<div>
				<Button
					type="button"
					variant="destructive"
					size="icon"
					aria-label="Sign Out"
				>
					<LogOutIcon />
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
