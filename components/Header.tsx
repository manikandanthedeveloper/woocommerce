"use client";

import Image from "next/image";
import logoImage from "@/assets/images/template-white-logo.png";
import Link from "next/link";
import Authentication from "./Authentication";

const Header = () => {
	return (
		<>
			<header className="bg-gray-950 sticky top-0 z-50">
				<div className="container mx-auto flex justify-between items-center py-4">
					<Link href="/" className="flex items-center">
						<div>
							<Image
								src={logoImage.src}
								alt="Logo"
								className="h-14 w-auto mr-4"
								width={175}
								height={56}
								priority
							/>
						</div>
					</Link>

					<div className="flex lg:hidden">
						<button
							id="hamburger"
							className="text-white focus:outline-none"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16m-7 6h7"></path>
							</svg>
						</button>
					</div>

					<nav className="hidden lg:flex md:grow justify-center">
						<ul className="flex justify-center space-x-4 text-white">
							<li>
								<Link
									href={"/"}
									className="hover:text-secondary font-semibold"
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									href={"/products"}
									className="hover:text-secondary font-semibold"
								>
									Shop
								</Link>
							</li>

							<li className="relative group">
								<Link
									href="/about"
									className="hover:text-secondary font-semibold flex items-center"
								>
									About
								</Link>
							</li>

							<li
								className="relative group"
								x-data="{ open: false }"
							>
								<Link
									href="/contact"
									className="hover:text-secondary font-semibold flex items-center"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
					<Authentication />
				</div>
			</header>
		</>
	);
};

export default Header;
