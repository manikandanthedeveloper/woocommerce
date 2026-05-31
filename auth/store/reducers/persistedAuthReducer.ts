import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "@/auth/store/slices/authSlice";
const persistConfig = {
	key: "auth",
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);
export default persistedAuthReducer;
