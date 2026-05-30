import { useAppDispatch } from "@/hooks/useAppDispatch";
import { IProduct } from "../types/Products.type";
import {
	addToCart,
	decreaseQty,
	increaseQty,
} from "@/minicart/store/slices/cartSlice";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useCallback } from "react";

const AddToCart = (product: IProduct) => {
	const dispatch = useAppDispatch();
	const itemExit = useAppSelector((state) =>
		state.cart.items.find((item) => item.databaseId === product.databaseId),
	);
	const handleAdd = useCallback(
		(product: IProduct) => {
			dispatch(addToCart(product));
		},
		[dispatch],
	);
	const handleIncrease = useCallback(
		(id: number) => {
			dispatch(increaseQty(id));
		},
		[dispatch],
	);
	const handleDecrease = useCallback(
		(id: number) => {
			dispatch(decreaseQty(id));
		},
		[dispatch],
	);

	return (
		<>
			{itemExit ? (
				<div className="flex flex-row gap-4 items-center">
					<button
						className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-none w-2/4 cursor-pointer"
						onClick={() => handleDecrease(product.databaseId)}
					>
						-
					</button>
					<span>{itemExit.quantity}</span>
					<button
						className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-none w-2/4 cursor-pointer"
						onClick={() => handleIncrease(product.databaseId)}
					>
						+
					</button>
				</div>
			) : (
				<button
					className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-none w-2/4 cursor-pointer"
					onClick={() => handleAdd(product)}
				>
					Add to Cart
				</button>
			)}
		</>
	);
};

export default AddToCart;
