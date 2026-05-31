import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedCartReducer from "@/minicart/store/reducers/persistedCartReducer";
import persistedAuthReducer from "@/auth/store/reducers/persistedAuthReducer";

export const store = configureStore({
	reducer: { cart: persistedCartReducer, auth: persistedAuthReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
