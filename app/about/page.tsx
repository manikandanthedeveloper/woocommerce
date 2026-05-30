import Image from "next/image";

export default function About() {
	return (
		<>
			<section className="bg-white py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<span className="text-red-500 font-semibold uppercase tracking-wider">
							About Us
						</span>

						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
							Crafting Style, Confidence & Quality
						</h1>

						<p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
							We believe fashion is more than clothing and
							accessories it is a way to express individuality.
							Our mission is to bring premium-quality products
							that inspire confidence, comfort, and timeless
							style.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<Image
								src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
								alt="About Us"
								className="w-full h-125 object-cover rounded-2xl shadow-lg"
								width={287}
								height={431}
							/>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Story
							</h2>

							<p className="text-gray-600 leading-relaxed mb-6">
								Founded in 2020, our brand started with a simple
								vision—to create a shopping experience that
								combines quality, affordability, and modern
								design. What began as a small online store has
								grown into a trusted destination for customers
								seeking stylish products for everyday life.
							</p>

							<p className="text-gray-600 leading-relaxed mb-6">
								Every item in our collection is carefully
								selected and tested to ensure it meets our
								standards of quality and craftsmanship. We work
								closely with trusted manufacturers and designers
								to deliver products our customers genuinely
								love.
							</p>

							<div className="grid grid-cols-2 gap-6 mt-8">
								<div>
									<h3 className="text-4xl font-bold text-red-500">
										10K+
									</h3>
									<p className="text-gray-600 mt-2">
										Happy Customers
									</p>
								</div>

								<div>
									<h3 className="text-4xl font-bold text-red-500">
										500+
									</h3>
									<p className="text-gray-600 mt-2">
										Premium Products
									</p>
								</div>

								<div>
									<h3 className="text-4xl font-bold text-red-500">
										50+
									</h3>
									<p className="text-gray-600 mt-2">
										Brand Partners
									</p>
								</div>

								<div>
									<h3 className="text-4xl font-bold text-red-500">
										4.9★
									</h3>
									<p className="text-gray-600 mt-2">
										Customer Rating
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900">
							Our Mission
						</h2>

						<p className="text-gray-600 mt-4 max-w-3xl mx-auto">
							To empower individuals with products that blend
							quality, affordability, and modern design while
							delivering an exceptional shopping experience.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h3 className="text-xl font-semibold mb-4">
								Quality First
							</h3>

							<p className="text-gray-600">
								We carefully select every product to ensure
								superior quality, durability, and customer
								satisfaction.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h3 className="text-xl font-semibold mb-4">
								Customer Focused
							</h3>

							<p className="text-gray-600">
								Our customers are at the heart of everything we
								do, from product selection to support and
								service.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h3 className="text-xl font-semibold mb-4">
								Sustainable Growth
							</h3>

							<p className="text-gray-600">
								We strive to build a responsible business that
								creates value for customers, partners, and
								communities.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-red-500 py-20">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Join Our Journey
					</h2>

					<p className="text-red-100 max-w-2xl mx-auto mb-8">
						Discover our latest collections and become part of a
						community that values quality, style, and exceptional
						experiences.
					</p>

					<a
						href="/shop"
						className="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
					>
						Shop Now
					</a>
				</div>
			</section>
		</>
	);
}
