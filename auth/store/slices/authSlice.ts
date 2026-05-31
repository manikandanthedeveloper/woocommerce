import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
	id: string;
	email: string;
	firstNam: string;
	lastName: string;
	username: string;
}

interface Token {
	authToken: string;
	refreshToken: string;
}

interface AuthState {
	user: User | null;
	token: Token | null;
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	user: null,
	token: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (
			state,
			action: PayloadAction<{
				user: User;
				token: Token;
			}>,
		) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isAuthenticated = true;
		},

		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
