import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { alertReducer } from "modules/alert";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import {
  createMigrate,
  PersistedState,
  persistReducer,
  persistStore,
} from "redux-persist";
import { localizationApi } from "./rtk/localizationApi";
import { settingReducer } from "./reducer/setting";

const migrations = {
  1: (s: PersistedState) => {},
  2: (s: PersistedState) => {},
};

const persistConfig = {
  // stateReconciler: autoMergeLevel2,
  key: "root",
  version: 2,
  storage: AsyncStorage,
  whitelist: ["user", "setting"],
  migrate: createMigrate(migrations, { debug: true }),
};

// const rtxApi = rtkApi.injectEndpoints({
//   endpoints: bannerApi.endpoints,
// });

const rootReducer = combineReducers({
  alert: alertReducer,
  setting: settingReducer,
  [localizationApi.reducerPath]: localizationApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [localizationApi.middleware];

// if (__DEV__) {
//   const createDebugger = require("redux-flipper").default;
//   middlewares.push(createDebugger());
// }

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
export default store;
