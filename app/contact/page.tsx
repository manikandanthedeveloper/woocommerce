export default function Contact() {
	return (
		<>
			<section className="bg-gray-50 py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<span className="text-red-500 font-semibold uppercase tracking-widest">
							Contact Us
						</span>

						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
							We&#39;d Love to Hear From You
						</h1>

						<p className="text-gray-600 mt-6 max-w-3xl mx-auto">
							Have questions about our products, orders, or
							services? Reach out to our team and we&#39;ll get
							back to you as soon as possible.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<div className="bg-white rounded-none shadow-sm p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Send Us a Message
							</h2>

							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-gray-700 font-medium mb-2">
											First Name
										</label>
										<input
											type="text"
											placeholder="John"
											className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
										/>
									</div>

									<div>
										<label className="block text-gray-700 font-medium mb-2">
											Last Name
										</label>
										<input
											type="text"
											placeholder="Doe"
											className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
										/>
									</div>
								</div>

								<div>
									<label className="block text-gray-700 font-medium mb-2">
										Email Address
									</label>
									<input
										type="email"
										placeholder="john@example.com"
										className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
									/>
								</div>

								<div>
									<label className="block text-gray-700 font-medium mb-2">
										Subject
									</label>
									<input
										type="text"
										placeholder="How can we help?"
										className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
									/>
								</div>

								<div>
									<label className="block text-gray-700 font-medium mb-2">
										Message
									</label>
									<textarea
										rows={6}
										placeholder="Write your message here..."
										className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
									></textarea>
								</div>

								<button
									type="submit"
									className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-none transition"
								>
									Send Message
								</button>
							</form>
						</div>

						<div className="space-y-8">
							<div className="bg-white rounded-none shadow-sm p-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Contact Information
								</h2>

								<div className="space-y-6">
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											📍 Address
										</h3>
										<p className="text-gray-600">
											123 Fashion Street,
											<br />
											Downtown Business District,
											<br />
											New York, NY 10001
										</p>
									</div>

									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											📞 Phone
										</h3>
										<p className="text-gray-600">
											+1 (555) 123-4567
										</p>
									</div>

									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											✉️ Email
										</h3>
										<p className="text-gray-600">
											support@tailstore.com
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-none shadow-sm p-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Business Hours
								</h2>

								<div className="space-y-3 text-gray-600">
									<div className="flex justify-between">
										<span>Monday - Friday</span>
										<span>09:00 AM - 06:00 PM</span>
									</div>

									<div className="flex justify-between">
										<span>Saturday</span>
										<span>10:00 AM - 04:00 PM</span>
									</div>

									<div className="flex justify-between">
										<span>Sunday</span>
										<span>Closed</span>
									</div>
								</div>
							</div>

							<div className="bg-red-500 text-white rounded-none p-8">
								<h3 className="text-2xl font-bold mb-4">
									Need Immediate Help?
								</h3>

								<p className="mb-6 text-red-100">
									Our customer support team is available to
									assist you with any questions regarding
									orders, shipping, returns, or product
									inquiries.
								</p>

								<a
									href="tel:+15551234567"
									className="inline-block bg-white text-red-500 px-6 py-3 rounded-none font-semibold hover:bg-gray-100"
								>
									Call Support
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
