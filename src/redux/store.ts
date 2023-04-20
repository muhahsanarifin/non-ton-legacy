import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import rootReducer from "../redux/reducers/index";

const persistConfig = {
  key: "nonton",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // .concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistedStore = persistStore(store);
export default store;
