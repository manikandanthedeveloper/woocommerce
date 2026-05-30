import { ICartState } from "@/minicart/types/cart.type";
import { IProduct } from "@/products/types/Products.type";

export const selectCartItems = (state: ICartState) => state.items;

export const selectCartCount = (state: ICartState) =>
	state.items.reduce(
		(total: number, item: IProduct) => total + item.quantity,
		0,
	);

export const selectSubtotal = (state: ICartState) =>
	state.items.reduce(
		(total: number, item: IProduct) =>
			total + item.salePrice * item.quantity,
		0,
	);
