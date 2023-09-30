import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//Reducers
import userReducer from "./reducers/userSlice";

//API Endpoints
import { authAPI } from "./api/authAPI";

const rootReducer = combineReducers({
  user: userReducer,
  [authAPI.reducerPath]: authAPI.reducer,
});

export const store = configureStore({
  reducer: persistReducer({ key: "root", storage }, rootReducer),
  middleware: [thunk, authAPI.middleware],
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
