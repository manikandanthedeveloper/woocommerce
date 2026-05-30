import Link from "next/link";

const page = () => {
	return (
		<div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 my-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-slate-800">
						Create Account
					</h1>
					<p className="text-slate-500 mt-2">
						Join TailStore and start shopping today
					</p>
				</div>

				<form className="space-y-5">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-slate-700 mb-2">
								First Name
							</label>
							<input
								type="text"
								placeholder="John"
								className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-700 mb-2">
								Last Name
							</label>
							<input
								type="text"
								placeholder="Doe"
								className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
							/>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-slate-700 mb-2">
							Email Address
						</label>
						<input
							type="email"
							placeholder="john@example.com"
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-slate-700 mb-2">
							Mobile Number
						</label>
						<input
							type="tel"
							placeholder="+91 9876543210"
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-slate-700 mb-2">
							Password
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-slate-700 mb-2">
							Confirm Password
						</label>
						<input
							type="password"
							placeholder="Confirm password"
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
						/>
					</div>

					<div className="flex items-start gap-3">
						<input
							type="checkbox"
							id="terms"
							className="mt-1 h-4 w-4 text-indigo-600 border-slate-300 rounded"
						/>
						<label
							htmlFor="terms"
							className="text-sm text-slate-600"
						>
							I agree to the
							<a
								href="#"
								className="text-indigo-600 hover:underline"
							>
								Terms & Conditions
							</a>
							and
							<a
								href="#"
								className="text-indigo-600 hover:underline"
							>
								Privacy Policy
							</a>
						</label>
					</div>

					<button
						type="submit"
						className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
					>
						Create Account
					</button>

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-slate-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="bg-white px-4 text-slate-500">
								OR
							</span>
						</div>
					</div>

					<button
						type="button"
						className="w-full border border-slate-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-slate-50 transition"
					>
						<svg className="w-5 h-5" viewBox="0 0 48 48">
							<path
								fill="#FFC107"
								d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
							/>
						</svg>
						Sign up with Google
					</button>

					<p className="text-center text-sm text-slate-600">
						Already have an account?
						<Link
							href="/signin"
							className="text-indigo-600 font-medium hover:underline"
						>
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default page;
