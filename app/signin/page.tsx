import Link from "next/link";

const page = () => {
	return (
		<div className="bg-gray-100 min-h-screen flex items-center justify-center">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">
						TailStore
					</h1>
					<p className="text-gray-500 mt-2">
						Sign in to your account
					</p>
				</div>

				<form className="space-y-5">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Email Address
						</label>
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
						/>
					</div>

					<div>
						<div className="flex justify-between items-center mb-2">
							<label className="text-sm font-medium text-gray-700">
								Password
							</label>
							<a
								href="#"
								className="text-sm text-indigo-600 hover:text-indigo-700"
							>
								Forgot Password?
							</a>
						</div>

						<input
							type="password"
							placeholder="Enter your password"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
						/>
					</div>

					<div className="flex items-center">
						<input
							id="remember"
							type="checkbox"
							className="h-4 w-4 text-indigo-600 rounded border-gray-300"
						/>
						<label
							htmlFor="remember"
							className="ml-2 text-sm text-gray-600"
						>
							Remember me
						</label>
					</div>

					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
					>
						Sign In
					</button>

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="bg-white px-4 text-gray-500">
								OR
							</span>
						</div>
					</div>

					<button
						type="button"
						className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
					>
						<svg className="w-5 h-5" viewBox="0 0 48 48">
							<path
								fill="#FFC107"
								d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
							/>
							<path
								fill="#FF3D00"
								d="M6.3 14.7l6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
							/>
							<path
								fill="#4CAF50"
								d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8H6.4v.1C9.7 39.7 16.3 44 24 44z"
							/>
							<path
								fill="#1976D2"
								d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.6-6.1 7.1l6.2 5.2C39.1 37.1 44 31.1 44 24c0-1.3-.1-2.4-.4-3.5z"
							/>
						</svg>
						Continue with Google
					</button>

					<p className="text-center text-sm text-gray-600">
						Don&#39;t have an account?
						<Link
							href="/signup"
							className="text-indigo-600 font-medium hover:text-indigo-700"
						>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default page;
