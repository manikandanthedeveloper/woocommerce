import PaypalIcon from "@/assets/images/social_icons/paypal.svg";
import StripeIcon from "@/assets/images/social_icons/stripe.svg";
import VisaIcon from "@/assets/images/social_icons/visa.svg";
import FooterLogo from "@/assets/images/template-logo.png";
import FacebookLogo from "@/assets/images/social_icons/facebook.svg";
import TwitterLogo from "@/assets/images/social_icons/twitter.svg";
import InstagramLogo from "@/assets/images/social_icons/instagram.svg";
import PinterestLogo from "@/assets/images/social_icons/pinterest.svg";
import YoutubeLogo from "@/assets/images/social_icons/youtube.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="border-t border-gray-200">
			<div className="container mx-auto px-4 py-10">
				<div className="flex flex-wrap -mx-4">
					<div className="w-full sm:w-1/6 px-4 mb-8">
						<h3 className="text-lg font-semibold mb-4">Shop</h3>
						<ul>
							<li>
								<Link
									href="/products"
									className="hover:text-primary"
								>
									Shop
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="hover:text-primary"
								>
									Women
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="hover:text-primary"
								>
									Men
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="hover:text-primary"
								>
									Shoes
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="hover:text-primary"
								>
									Accessories
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/6 px-4 mb-8">
						<h3 className="text-lg font-semibold mb-4">Pages</h3>
						<ul>
							<li>
								<Link
									href="/about"
									className="hover:text-primary"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-primary"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-primary"
								>
									Checkout
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-primary"
								>
									404
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/6 px-4 mb-8">
						<h3 className="text-lg font-semibold mb-4">Account</h3>
						<ul>
							<li>
								<Link
									href="/contact"
									className="hover:text-primary"
								>
									Cart
								</Link>
							</li>
							<li>
								<Link
									href="/signup"
									className="hover:text-primary"
								>
									Signup
								</Link>
							</li>
							<li>
								<Link
									href="/signin"
									className="hover:text-primary"
								>
									Signin
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/6 px-4 mb-8">
						<h3 className="text-lg font-semibold mb-4">
							Follow Us
						</h3>
						<ul>
							<li className="flex items-center mb-2">
								<Image
									src={FacebookLogo}
									alt="Facebook"
									className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
									height={16}
									width={16}
								/>
								<a href="#" className="hover:text-primary">
									Facebook
								</a>
							</li>
							<li className="flex items-center mb-2">
								<Image
									src={TwitterLogo}
									alt="Twitter"
									className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
									height={16}
									width={16}
								/>
								<a href="#" className="hover:text-primary">
									Twitter
								</a>
							</li>
							<li className="flex items-center mb-2">
								<Image
									src={InstagramLogo}
									alt="Instagram"
									className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
									height={16}
									width={16}
								/>
								<a href="#" className="hover:text-primary">
									Instagram
								</a>
							</li>
							<li className="flex items-center mb-2">
								<Image
									src={PinterestLogo}
									alt="Instagram"
									className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
									height={16}
									width={16}
								/>
								<a href="#" className="hover:text-primary">
									Pinterest
								</a>
							</li>
							<li className="flex items-center mb-2">
								<Image
									src={YoutubeLogo}
									alt="Instagram"
									className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
									height={16}
									width={16}
								/>
								<a href="#" className="hover:text-primary">
									YouTube
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-2/6 px-4 mb-8">
						<h3 className="text-lg font-semibold mb-4">
							Contact Us
						</h3>
						<p>
							<Image
								src={FooterLogo}
								alt="Logo"
								className="h-15 mb-4"
								width={180}
								height={60}
							/>
						</p>
						<p>123 Street Name, Paris, France</p>
						<p className="text-xl font-bold my-4">
							Phone: (123) 456-7890
						</p>
						<a href="mailto:info@company.com" className="underline">
							Email: info@company.com
						</a>
					</div>
				</div>
			</div>

			<div className="py-6 border-t border-gray-200">
				<div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
					<div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
						<p className="mb-2 font-bold">
							&copy; 2024 Your Company. All rights reserved.
						</p>
						<ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
							<li>
								<a href="#" className="hover:text-primary">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary">
									FAQ
								</a>
							</li>
						</ul>
						<p className="text-sm mt-4">
							Your shops description goes here. This is a brief
							introduction to your shop and what you offer.
						</p>
					</div>
					<div className="w-full lg:w-1/4 text-center lg:text-right">
						<Image
							src={PaypalIcon}
							alt="PayPal"
							className="inline-block h-8 mr-2 w-auto"
							height={312}
							width={312}
						/>
						<Image
							src={StripeIcon}
							alt="Stripe"
							className="inline-block h-8 mr-2 w-auto"
							height={312}
							width={312}
						/>
						<Image
							src={VisaIcon}
							alt="Visa"
							className="inline-block h-8 w-auto"
							height={312}
							width={312}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
