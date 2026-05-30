import { IProduct } from "@/products/types/Products.type";
import { Dispatch } from "@reduxjs/toolkit";

export interface ICartState {
	items: IProduct[];
	subtotal: number;
	totalItems: number;
	discount: number;
	shipping: number;
	grandTotal: number;
	coupon: string;
	isMiniCartOpen: boolean;
	loading: boolean;
	error: string;
}

export type State = {
	items: IProduct[];
};

export type Action = {
	type: "ADD_CART" | "UPDATE_CART" | "DELETE_CART";
};

export type CartContextType = {
	state: State;
	dispatch: Dispatch<Action>;
};
