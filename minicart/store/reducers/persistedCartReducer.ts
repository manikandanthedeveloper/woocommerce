import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "@/minicart/store/slices/cartSlice";
const persistConfig = {
	key: "cart",
	storage,
};

const persistedCartReducer = persistReducer(persistConfig, CartReducer);
export default persistedCartReducer;
