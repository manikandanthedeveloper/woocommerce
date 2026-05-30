import { ICartState } from "@/minicart/types/cart.type";
import { IProduct } from "@/products/types/Products.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartState = {
	items: [],
	subtotal: 0,
	totalItems: 0,
	discount: 0,
	shipping: 0,
	grandTotal: 0,
	coupon: "",
	isMiniCartOpen: false,
	loading: false,
	error: "",
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const existing = state.items.find(
				(item) => item.id === action.payload.id,
			);
			if (existing) {
				existing.quantity += action.payload.quantity;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(item) => item.databaseId !== action.payload,
			);
		},

		increaseQty: (state, action: PayloadAction<number>) => {
			const item = state.items.find(
				(item) => item.databaseId === action.payload,
			);

			if (item) {
				item.quantity += 1;
			}
		},

		decreaseQty: (state, action: PayloadAction<number>) => {
			const item = state.items.find(
				(item) => item.databaseId === action.payload,
			);

			if (!item) return;

			if (item.quantity <= 1) {
				state.items = state.items.filter(
					(item) => item.databaseId !== action.payload,
				);
			} else {
				item.quantity -= 1;
			}
		},

		updateQty: (
			state,
			action: PayloadAction<{
				id: string;
				quantity: number;
			}>,
		) => {
			const item = state.items.find(
				(item) => item.id === action.payload.id,
			);

			if (item) {
				item.quantity = action.payload.quantity;
			}
		},

		clearCart: (state) => {
			state.items = [];
		},

		openMiniCart: (state) => {
			state.isMiniCartOpen = true;
		},

		closeMiniCart: (state) => {
			state.isMiniCartOpen = false;
		},

		toggleMiniCart: (state) => {
			state.isMiniCartOpen = !state.isMiniCartOpen;
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	increaseQty,
	decreaseQty,
	updateQty,
	clearCart,
	openMiniCart,
	closeMiniCart,
	toggleMiniCart,
} = cartSlice.actions;

export default cartSlice.reducer;
