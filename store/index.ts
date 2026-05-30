import { configureStore } from "@reduxjs/toolkit";
import persistedCartReducer from "@/minicart/store/reducers/persistedCartReducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
	reducer: { cart: persistedCartReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
