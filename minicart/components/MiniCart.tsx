"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
const MiniCart = (cartOpen: { cartOpen: boolean }) => {
	const cartItems = useAppSelector((state) => state.cart.items);
	return (
		<div
			className={`absolute right-0 mt-1 w-80 bg-white shadow-lg p-4 rounded ${cartOpen ? "block" : "hidden"}`}
		>
			<div className="space-y-4">
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<CartItem {...item} key={item.id} />
					))
				) : (
					<EmptyCart />
				)}
			</div>
			<a
				href="/cart.html"
				className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold"
			>
				Go to Cart
			</a>
		</div>
	);
};

export default MiniCart;
