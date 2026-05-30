import Image from "next/image";
import logoImage from "@/assets/images/template-white-logo.png";
import searchIcon from "@/assets/images/search-icon.svg";
import Link from "next/link";
import HeaderCart from "./HeaderCart";

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

					<div className="hidden lg:flex items-center space-x-4 relative">
						<a
							href="register.html"
							className="bg-primary border border-white hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
						>
							Register
						</a>
						<a
							href="register.html"
							className="bg-primary border border-white hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
						>
							Login
						</a>
						<HeaderCart />
						<a
							id="search-icon"
							href="javascript:void(0);"
							className="text-white hover:text-secondary group"
						>
							<Image
								src={searchIcon.src}
								alt="Search"
								className="h-6 w-6 transition-transform transform group-hover:scale-120"
								width={24}
								height={24}
							/>
						</a>
						<div
							id="search-field"
							className="hidden absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded"
						>
							<input
								type="text"
								className="w-full p-2 border border-gray-300 rounded"
								placeholder="Search for products..."
							/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
