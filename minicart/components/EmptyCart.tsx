const EmptyCart = () => {
	return (
		<div className="p-6 flex flex-col items-center justify-center text-center">
			<div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-10 h-10 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5.4 5M7 13l-1 5h12m-7-5v5"
					/>
				</svg>
			</div>

			<h3 className="text-lg font-semibold text-gray-800">
				Your Cart is Empty
			</h3>

			<p className="text-sm text-gray-500 mt-2 mb-5">
				Looks like you have not added anything to your cart yet.
			</p>

			<button className="w-full bg-primary text-white py-3 px-4 font-medium hover:opacity-90 transition">
				Continue Shopping
			</button>
		</div>
	);
};

export default EmptyCart;
