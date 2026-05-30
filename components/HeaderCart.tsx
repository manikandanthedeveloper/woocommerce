"use client";

import { Link } from "lucide-react";
import Image from "next/image";
import cartImage from "@/assets/images/cart-shopping.svg";
import MiniCart from "@/minicart/components/MiniCart";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { toggleMiniCart } from "@/minicart/store/slices/cartSlice";

const HeaderCart = () => {
	const dispatch = useAppDispatch();
	const cartOpen = useAppSelector((state) => state.cart.isMiniCartOpen);
	const onToggleCart = () => {
		dispatch(toggleMiniCart());
	};

	return (
		<div className="relative group cart-wrapper">
			<button onClick={onToggleCart} className="cursor-pointer">
				<Image
					src={cartImage.src}
					alt="Cart"
					className="h-6 w-6 group-hover:scale-120"
					width={24}
					height={24}
				/>
			</button>
			{cartOpen && <MiniCart cartOpen={cartOpen} />}
		</div>
	);
};

export default HeaderCart;
